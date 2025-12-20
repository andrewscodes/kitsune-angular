import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { AutoFocusModule } from 'primeng/autofocus';

interface CarouselResponsiveOption {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'kitsoone-home',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    TagModule,
    ImageModule,
    AutoFocusModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  protected products!: unknown[];
  protected showNavigators = false;

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

  protected get shouldShowNavigators(): boolean {
    return this.getCurrentNumVisible() < 4;
  }

  public ngOnInit(): void {
    Carousel.prototype.onTouchMove = (): void => undefined;
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

  protected getCurrentNumVisible(): number {
    // Check if we're running in the browser (not SSR)
    if (typeof window === 'undefined') {
      return 4; // Default for SSR - assume desktop view
    }
    const screenWidth = window.innerWidth;
    // Find the matching responsive option based on current screen width
    for (const option of this.carouselResponsiveOptions) {
      const breakpointValue = parseInt(option.breakpoint.replace('px', ''));
      if (screenWidth < breakpointValue) {
        return option.numVisible;
      }
    }
    return 4; // Default for screens larger than the largest breakpoint
  }
}
