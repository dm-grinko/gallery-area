import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAreaComponent } from './gallery-area.component';

describe('GalleryAreaComponent', () => {
  let component: GalleryAreaComponent;
  let fixture: ComponentFixture<GalleryAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
