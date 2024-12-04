import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from 'src/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports:[CommonModule]
})
export class LoginComponent implements OnInit {

  constructor(private _loginService : loginService,
    private router : Router
  ) { }
  ngOnInit(): void {
  }
}
/*
loginService(){
this._loginService.getToken().subscribe(data => {

})
}*/