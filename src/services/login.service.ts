import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "src/models/Login";

@Injectable({providedIn : 'root'})

export class loginService{
url= "http://localhost:3000/users/login";
constructor (private http:HttpClient)
    {

    }

    getToken(login: Login): Observable<any> {
        const headers = { 'Content-Type': 'application/json' }; // Configura los encabezados
        return this.http.post(this.url, login, { headers }); // Usa POST con el body
    }
}
