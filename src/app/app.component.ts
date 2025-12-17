import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { AnnouncementBarComponent } from './components/announcement-bar/announcement-bar.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'kitsoone-main',
  imports: [AnnouncementBarComponent, NavMenuComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'kitsoone-website';
}
