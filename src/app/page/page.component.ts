import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [NgbCarouselConfig]
})
export class PageComponent implements OnInit {
  showNavigationIndicators = false;
  images = [1, 2, 3].map(() => `http://localhost:4200/assets/slider.png?random&t=${Math.random()}` );

  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
  }
  

}
