import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverDescriptionComponent } from './over-description.component';

describe('OverDescriptionComponent', () => {
  let component: OverDescriptionComponent;
  let fixture: ComponentFixture<OverDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
