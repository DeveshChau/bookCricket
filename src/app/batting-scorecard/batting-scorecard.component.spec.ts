import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattingScorecardComponent } from './batting-scorecard.component';

describe('BatsmanScorecardComponent', () => {
  let component: BattingScorecardComponent;
  let fixture: ComponentFixture<BattingScorecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattingScorecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattingScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
