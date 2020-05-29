import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { ScoreBoard } from '../shared/model/bookCricket.model';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  scoreBoard: ScoreBoard;
  constructor(
    private dataService: DataService
  ) {
    this.dataService.scoreBoardObs.subscribe(res => {
      this.scoreBoard = res;
    });
  }

  ngOnInit(): void {
  }
}
