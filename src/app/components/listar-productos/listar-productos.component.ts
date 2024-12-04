import { Component, OnInit } from '@angular/core';
import Producto from 'src/models/Producto';
import { ProductoService } from 'src/services/producto.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
    selector: 'app-listar-productos',
    templateUrl: './listar-productos.component.html',
    styleUrls: ['./listar-productos.component.css'],
    standalone: true,
    imports:[CommonModule]
})

  export class ListarProductosComponent implements OnInit{
    form:UntypedFormGroup;
    listProductos : Producto[]=[];
  constructor(private fb: UntypedFormBuilder, 
    private _productoService : ProductoService, 
    private toastr: ToastrService,
    private router: Router) 
    {
      this.form=this.fb.group({
          name:['',Validators.required],
          description:['',[Validators.required,Validators.maxLength(200), Validators.minLength(10)]],
          price:['',[Validators.required,Validators.maxLength(5), Validators.minLength(5)]],
          quantity:['',[Validators.required,Validators.maxLength(3), Validators.minLength(3)]]
        })
     }

  ngOnInit(): void {
    this.ObtenerProductos();
  }

  ObtenerProductos(){
    this._productoService.getProductos().subscribe(data => {
        this.listProductos=data;
       // console.log(data);
    }, error=>{
        console.log(error);
    })
  }
 

}