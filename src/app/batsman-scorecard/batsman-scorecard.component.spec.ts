import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatsmanScorecardComponent } from './batsman-scorecard.component';

describe('BatsmanScorecardComponent', () => {
  let component: BatsmanScorecardComponent;
  let fixture: ComponentFixture<BatsmanScorecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatsmanScorecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatsmanScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
