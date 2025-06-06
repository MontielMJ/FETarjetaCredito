import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true
})
export class NavbarComponent {
activeDropdown: string | null = null;

constructor(private router: Router) {}

toggleDropdown(menu: string) {
  this.activeDropdown = this.activeDropdown === menu ? null : menu;
}

closeDropdown() {
  this.activeDropdown = null;
}
logout() {
  localStorage.removeItem("token");
  this.router.navigate(['/login']);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem("token");
  }
}