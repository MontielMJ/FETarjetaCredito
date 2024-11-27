import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import Producto from 'src/models/Producto';

@Injectable({providedIn : 'root'})

export class ProductoService{
    url='http://localhost:3000/products/productos/';
    constructor (private http:HttpClient)
    {

    }
    getProductos(): Observable<any>{
        return this.http.get(this.url);
    }
    getProductoById(id : string): Observable<any>{
        return this.http.get(this.url + id);
    }
    createProduct(producto: Producto): Observable<any>{
        return this.http.post(this.url, producto);
    }
    updateProduct(producto: Producto): Observable<any>{
        return this.http.put(this.url, producto);
    }
    deleteProducto(id: string): Observable<any>{
        return this.http.delete(this.url + id);
    }
}