import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Producto from 'src/models/Producto';
import { ProductoService } from 'src/services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule]
})
export class EditarProductoComponent  implements OnInit{
productId: number | null= null;

producto: Producto= {} as Producto; 
form:FormGroup;

constructor(private fb: FormBuilder,
  private toastr: ToastrService,
  private _productService : ProductoService,
  private router: Router,
  private route: ActivatedRoute
) {
 this.form=this.fb.group({
  producto: this.fb.group({
  name : ['', Validators.required],
  price :['', Validators.required],
  quantity : ['', Validators.required],
  description : ['', Validators.required]
  }),
 });
}
ngOnInit():void{
  this.route.paramMap.subscribe(params => {
    this.productId = Number(params.get('id')); // Convierte el parámetro a número
    console.log('ID del Producto:', this.productId); // Para depuración
    this.detalleProducto(this.productId);
  });
}

saveProducts(){
 /* if(this.selectProduct){

  }*/
}

detalleProducto(id : number){
  this._productService.getProductoById(id.toString()).subscribe({
    next: (response) => {
      debugger;
     this.producto = response.data;
     console.log(this.producto);
    },
    error: (error) => {
      console.log(error);
    }
  });
}

}
