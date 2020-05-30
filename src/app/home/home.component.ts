import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { BattingScorecard } from '../shared/model/bookCricket.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  gameOverSubscription: Subscription;
  curentPairSubscription: Subscription;
  public gameOver: boolean;
  public showMsg: string;
  public currentBattingScorecard: BattingScorecard[];
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.gameOverSubscription = this.dataService.gameOverObs.subscribe((res: boolean) => {
      this.gameOver = res;
      this.showMsg = 'Game Over: Refresh Your Browser To Restart';
    });
    this.curentPairSubscription = this.dataService.currentPairObs.subscribe(res => {
      this.currentBattingScorecard = res;
    });
  }

  ngOnDestroy(): void {
    this.gameOverSubscription.unsubscribe();
    this.curentPairSubscription.unsubscribe();
  }
}
