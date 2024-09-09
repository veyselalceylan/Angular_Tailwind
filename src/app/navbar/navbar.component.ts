import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  constructor(private router: Router) {
    // Route değiştiğinde menünün kapanmasını sağlamak için
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
      }
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
