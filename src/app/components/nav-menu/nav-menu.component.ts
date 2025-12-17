import { Component, Renderer2, Inject, DOCUMENT } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
  
  isSidebarMenuOpen = false;

  toggleMenu() {
    this.isSidebarMenuOpen = !this.isSidebarMenuOpen;
    this.toggleBodyScroll();
  }

  onMenuItemClick() {
    this.isSidebarMenuOpen = false;
    this.toggleBodyScroll();
  }

  private toggleBodyScroll() {
    if (this.isSidebarMenuOpen) {
      this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(this.document.body, 'overflow');
    }
  }

  onCartClick() {
    console.log('Cart clicked!');
  }

  onLogoClick() {    
    this.router.navigate(['/']);
  }
 
}