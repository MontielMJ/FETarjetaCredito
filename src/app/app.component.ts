import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { loginService } from 'src/services/login.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterModule, NavbarComponent, CommonModule]
})
export class AppComponent {
  title = 'Servicios';
  constructor(private authService:loginService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}

