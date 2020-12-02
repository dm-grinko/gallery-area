import { Component, OnInit } from '@angular/core';

import { IGalleryAreaOptions } from './gallery-area/gallery-area.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  galleryAreaOptions: IGalleryAreaOptions;

  ngOnInit() {
    this.galleryAreaOptions = {
      title: 'Headphone Gallery',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images: [
        { 
          src: 'assets/images/img1.jpg',
          href: 'https://dmitrygrinko.com/portfolio',
        },
        { 
          src: 'assets/images/img2.jpg',
          href: 'https://dmitrygrinko.com/portfolio',
        },
        { 
          src: 'assets/images/img3.jpg',
          href: 'https://dmitrygrinko.com/portfolio',
        },
        { 
          src: 'assets/images/img4.jpg',
          href: 'https://dmitrygrinko.com/portfolio',
        },
        { 
          src: 'assets/images/img5.jpg',
          href: 'https://dmitrygrinko.com/portfolio',
        },
        { 
          src: 'assets/images/img6.jpg',
          href: 'https://dmitrygrinko.com/portfolio',
        },
      ]
    }
  }
}
