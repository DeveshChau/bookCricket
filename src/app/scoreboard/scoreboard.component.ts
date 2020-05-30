import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { ScoreBoard } from '../shared/model/bookCricket.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  scoreBoard: ScoreBoard;
  constructor(
    private dataService: DataService
  ) { }


  ngOnInit(): void {
    this.subscription = this.dataService.scoreBoardObs.subscribe(res => {
      this.scoreBoard = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
