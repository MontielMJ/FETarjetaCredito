import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn : 'root'})

export class loginService{
url= "http://localhost:3000/users/login";
constructor (private http:HttpClient)
    {

    }

    getToken(): Observable<any>{
        return this.http.get(this.url);
    }
}
