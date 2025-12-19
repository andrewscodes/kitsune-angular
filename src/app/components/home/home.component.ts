import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Button } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';

interface CarouselResponsiveOption {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'kitsoone-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, Button, TagModule, ImageModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  protected products!: unknown[];

  protected carouselResponsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  public ngOnInit(): void {
    this.products = [
      {
        id: '1000',
        name: 'OLED Display E-Paper',
        description: 'Product Description',
        image: 'assets/images/niceview.png',
        price: '100.000',
      },
      {
        id: '1001',
        name: 'White Switches x70',
        description: 'Product Description',
        image: 'assets/images/whiteswitch.jpg',
        price: '90.000',
      },
      {
        id: '1002',
        name: 'Supermini MCU',
        description: 'Product Description',
        image: 'assets/images/nicenano.png',
        price: '130.000',
      },
      {
        id: '1003',
        name: 'Brown Switches x70',
        description: 'Product Description',
        image: 'assets/images/brownswitch.jpg',
        price: '90.000',
      },
    ];
  }
}
