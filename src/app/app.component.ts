import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AnnouncementBarComponent } from './components/announcement-bar/announcement-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'kitsoone-main',
  imports: [
    RouterOutlet,
    AnnouncementBarComponent,
    NavMenuComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'kitsoone-website';
}
