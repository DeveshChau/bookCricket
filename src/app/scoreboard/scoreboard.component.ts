import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { ScoreBoard } from '../shared/interface/bookCricket.interface';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  scoreBoard: ScoreBoard;
  constructor(
    private _dataService: DataService
  ) {
    this._dataService.scoreBoardSub.subscribe(res => {
      this.scoreBoard = res;
    })
  }

  ngOnInit(): void {
  }
}
