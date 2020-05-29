import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-risk-selection',
  templateUrl: './risk-selection.component.html',
  styleUrls: ['./risk-selection.component.css']
})
export class RiskSelectionComponent implements OnInit {
  gameOver = false;
  constructor(
    private dataService: DataService
  ) {
    this.dataService.gameOverObs.subscribe((res: boolean) => {
      this.gameOver = res;
    });
  }

  ngOnInit(): void {
  }

  onRiskSelection(risk: string) {
    this.dataService.generateScore(risk);
  }

}
