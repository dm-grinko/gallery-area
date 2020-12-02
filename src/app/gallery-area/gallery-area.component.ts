import { Component, Input, OnInit } from '@angular/core';

import { IGalleryAreaOptions } from './gallery-area.model';

@Component({
  selector: 'app-gallery-area',
  templateUrl: './gallery-area.component.html',
  styleUrls: ['./gallery-area.component.scss']
})
export class GalleryAreaComponent implements OnInit {
  @Input('options') options: IGalleryAreaOptions;

  ngOnInit(): void {
  }

}
