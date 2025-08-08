import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isMobileMenuOpen = false;

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onMenuItemClick() {
    // Close the mobile menu when a menu item is clicked
    this.isMobileMenuOpen = false;
  }

  onCartClick() {
    // Handle cart click functionality
    console.log('Cart clicked!');
    // Add your cart functionality here
    // For example: navigate to cart page, open cart sidebar, etc.
  }
 
}
