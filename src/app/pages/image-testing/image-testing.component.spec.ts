import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTestingComponent } from './image-testing.component';

describe('ImageTestingComponent', () => {
  let component: ImageTestingComponent;
  let fixture: ComponentFixture<ImageTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
