import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillMdComponent } from './quill-md.component';

describe('QuillMdComponent', () => {
  let component: QuillMdComponent;
  let fixture: ComponentFixture<QuillMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuillMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
