import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { BattingScorecard } from '../shared/model/bookCricket.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public gameOver: boolean;
  public showMsg: string;
  public currentBattingScorecard:BattingScorecard[];
  constructor(private _dataService: DataService) {
    this._dataService.gameOver.subscribe((res: boolean) => {
      this.gameOver = res;
      this.showMsg = 'Game Over: Refresh Your Browser To Restart';
    })
    this._dataService.currentPairSub.subscribe(res => {
      this.currentBattingScorecard = res
    })
  }
  ngOnInit(): void {
  }

}
