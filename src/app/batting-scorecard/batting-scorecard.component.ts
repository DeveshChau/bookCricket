import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { BattingScorecard } from '../shared/model/bookCricket.model';

@Component({
  selector: 'app-batsman-scorecard',
  templateUrl: './batting-scorecard.component.html',
  styleUrls: ['./batting-scorecard.component.css']
})
export class BattingScorecardComponent implements OnInit {
  public battingScorecard: BattingScorecard[] = []
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.battingScorecard = this._dataService.getBattingscoreCard();
  }

}
