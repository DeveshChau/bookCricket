import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-risk-selection',
  templateUrl: './risk-selection.component.html',
  styleUrls: ['./risk-selection.component.css']
})
export class RiskSelectionComponent implements OnInit {
  gameOver: boolean = false;
  constructor(
    private _dataService: DataService
  ) { 
    this._dataService.gameOver.subscribe((res: boolean) => {
      this.gameOver = res;
    })
  }

  ngOnInit(): void {
  }

  onRiskSelection(risk: string) {
    this._dataService.generateScore(risk);
  }

}
