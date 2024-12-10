import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/models/Login';
import { loginService } from 'src/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports:[CommonModule,ReactiveFormsModule]
})
export class LoginComponent implements OnInit { 
   formLogin:FormGroup;
form: any;
  constructor(
    private fb : FormBuilder, 
    private _loginService : loginService,
    private router : Router
  ) {
      this.formLogin=this.fb.group({
        email:['',Validators.required],
        password: ['', Validators.required]
      })
    }  
  ngOnInit(): void {
  }

  iniciarSesion(){
    if(this.formLogin.invalid)return;
   
    const login: Login={
      email: this.formLogin.get('email')?.value,
      password: this.formLogin.get('password')?.value, 
    }
      this._loginService.getToken(login).subscribe(
        data => {
        if(data.isSuccess){
            localStorage.setItem("Token", data.token);
            console.log(this.router);
           this.router.navigate(["listar-productos"]);
        }else{
          alert("Credenciales son incorrectas");
        }
       
      }, error=>{
        console.log(error.message);
    })
  }



}
