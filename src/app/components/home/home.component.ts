import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CardComponent]
})
export class HomeComponent {

  protected products = [
    {
      name: "Corne Keyboard",
      image: "assets/images/corne.webp",
      description: "A split ergonomic keyboard with 42 keys"
    },
    {
      name: "Lily58 Keyboard",
      image: "assets/images/lily58.png",
      description: "A 58-key split keyboard with OLED displays"
    },
    {
      name: "Nice!Nano Controller",
      image: "assets/images/nicenano.avif",
      description: "Wireless microcontroller for custom keyboards"
    },
    {
      name: "Corne Keyboard",
      image: "assets/images/corne.webp",
      description: "A split ergonomic keyboard with 42 keys"
    }
  ] 
}