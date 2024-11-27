import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  Card  from 'src/models/Card';





@Injectable({providedIn : 'root'})

export class CardService{
    url='http://localhost:3000/cards/tarjetas/';
    constructor (private http:HttpClient)
    {

    }
    getCards(): Observable<any>{
        return this.http.get(this.url);
    }
    createCard(tarjeta: Card): Observable<any>{
        return this.http.post(this.url, tarjeta);
    }
   /* getProductoById(id : string): Observable<any>{
        return this.http.get(this.url + id);
    }
    
    updateProduct(producto: Producto): Observable<any>{
        return this.http.put(this.url, producto);
    }
    deleteProducto(id: string): Observable<any>{
        return this.http.delete(this.url + id);
    }*/
}