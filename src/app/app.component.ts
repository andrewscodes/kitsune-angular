import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { AnnouncementBarComponent } from './components/announcement-bar/announcement-bar.component';

@Component({
  selector: 'app-main',
  imports: [
    AnnouncementBarComponent,
    NavMenuComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kitsoone-website';
}