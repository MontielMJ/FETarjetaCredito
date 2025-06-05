import { Component, OnInit } from '@angular/core';
import Producto from 'src/models/Producto';
import { ProductoService } from 'src/services/producto.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-listar-productos',
    templateUrl: './listar-productos.component.html',
    styleUrls: ['./listar-productos.component.css'],
    standalone: true,
    imports:[CommonModule,ReactiveFormsModule,RouterModule]
})

  export class ListarProductosComponent implements OnInit
{
    form:FormGroup;
    listProductos : Producto[]=[];
    producto : Producto={} as Producto;
  constructor(
        private fb: FormBuilder, 
        private router: Router,
        private _productoService : ProductoService) 
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

    ObtenerProductos() {
      this._productoService.getProductos().subscribe({
        next: (response) => {
          this.listProductos = response.data;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }

    GetProductById(producto : number) {
      this.router.navigate(['/detalle-producto', producto]);
     }
}