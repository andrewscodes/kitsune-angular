import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'kitsoone-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public imageSrc!: string;
  @Input() public imageAlt: string = 'Product';
  @Input() public title?: string;
  @Input() public description?: string;
}
