import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  constructor(private router: Router) {}
  isMobileMenuOpen = false;

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onMenuItemClick() {
    // Close the mobile menu when a menu item is clicked
    this.isMobileMenuOpen = false;
  }

  onCartClick() {
    console.log('Cart clicked!');
  }

  onLogoClick() {    
    this.router.navigate(['/']);
  }
 
}
