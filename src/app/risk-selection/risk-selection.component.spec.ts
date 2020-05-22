import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskSelectionComponent } from './risk-selection.component';

describe('RiskSelectionComponent', () => {
  let component: RiskSelectionComponent;
  let fixture: ComponentFixture<RiskSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
