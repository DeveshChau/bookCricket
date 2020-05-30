import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-risk-selection',
  templateUrl: './risk-selection.component.html',
  styleUrls: ['./risk-selection.component.css']
})
export class RiskSelectionComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  gameOver = false;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.gameOverObs.subscribe((res: boolean) => {
      this.gameOver = res;
    });
  }

  onRiskSelection(risk: string): void {
    this.dataService.generateScore(risk);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
