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
      name: "Brown Switches X60",
      image: "assets/images/brownswitch.jpg",
      description: "COP 80.000"
    },
    {
      name: "White Switches X60",
      image: "assets/images/whiteswitch.jpg",
      description: "COP 80.000"
    },
    {
      name: "Nice!Nano v2",
      image: "assets/images/nicenano.png",
      description: "COP 100.000"
    },
    {
      name: "Nice!View",
      image: "assets/images/niceview.png",
      description: "COP 90.000"
    }
  ] 
}