import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  generateWhatsAppUrl,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  DISCORD_URL,
  GITHUB_URL,
} from '../../constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'kitsoone-announcement-bar',
  standalone: true,
  imports: [],
  templateUrl: './announcement-bar.component.html',
  styleUrls: ['./announcement-bar.component.scss'],
})
export class AnnouncementBarComponent {
  public readonly facebookUrl = FACEBOOK_URL;
  public readonly instagramUrl = INSTAGRAM_URL;
  public readonly discordUrl = DISCORD_URL;
  public readonly githubUrl = GITHUB_URL;

  public get whatsappUrl(): string {
    return generateWhatsAppUrl();
  }
}
