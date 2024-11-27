import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Producto from 'src/models/Producto';
import { ProductoService } from 'src/services/producto.service';

@Component({
    selector: 'app-crear-producto',
    templateUrl: './crear-producto.component.html',
    styleUrls: ['./crear-producto.component.css'],
    standalone: false
})
export class CrearProductoComponent implements OnInit {
  form:UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, 
    private _productoService : ProductoService, 
    private toastr: ToastrService,
    private router: Router) {
    this.form=this.fb.group({
        name:['',Validators.required],
        description:['',[Validators.required,Validators.maxLength(200), Validators.minLength(10)]],
        price:['',[Validators.required,Validators.maxLength(5), Validators.minLength(5)]],
        quantity:['',[Validators.required,Validators.maxLength(3), Validators.minLength(3)]]
      })
 }

  ngOnInit(): void {
  }

  agregarProducto(){
    const producto:  Producto={
         name: this.form.get('name')?.value,
         description: this.form.get('description')?.value,
         price: this.form.get('price')?.value,
         quantity: this.form.get('quantity')?.value,
     }

     this._productoService.createProduct(producto).subscribe(data => {
        this.toastr.success('El Producto ha sido Registrada','PRODUCTO REGISTRADO')
        this.router.navigate(['/']);
        this.form.reset();
     }, error=>{
        console.log(error);
        this.form.reset();
     })
  }
}
