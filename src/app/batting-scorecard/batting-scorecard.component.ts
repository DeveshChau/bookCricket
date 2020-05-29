import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { BattingScorecard } from '../shared/model/bookCricket.model';

@Component({
  selector: 'app-batsman-scorecard',
  templateUrl: './batting-scorecard.component.html',
  styleUrls: ['./batting-scorecard.component.css']
})
export class BattingScorecardComponent implements OnInit {
  battingScorecard: BattingScorecard[];
  currentBattingScorecard: BattingScorecard[];
  constructor(private _dataService: DataService) { 
    this._dataService.currentPairSub.subscribe(res => {
      this.currentBattingScorecard = res
    })
  }

  ngOnInit(): void {
    this.battingScorecard = this._dataService.getBattingScoreCard()
  }

}
