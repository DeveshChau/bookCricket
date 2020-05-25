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

  onLowRiskSelection() {
    const probability = this._dataService.getProbability();
    if (probability <= 50) { this._dataService.updateScoreBoard(0) }
    else if (probability <= 80) { this._dataService.updateScoreBoard(1) }
    else if (probability <= 95) { this._dataService.updateScoreBoard(2) }
    else if (probability <= 96) { this._dataService.updateScoreBoard(3) }
    else if (probability <= 98) { this._dataService.updateScoreBoard(4) }
    else if (probability <= 99) { this._dataService.updateScoreBoard(6) }
    else { this._dataService.updateScoreBoard(7) }
  }

  onMediunRiskSelection() {
    const probability = this._dataService.getProbability();
    if (probability <= 33) { this._dataService.updateScoreBoard(0) }
    else if (probability <= 68) { this._dataService.updateScoreBoard(1) }
    else if (probability <= 80) { this._dataService.updateScoreBoard(2) }
    else if (probability <= 82) { this._dataService.updateScoreBoard(3) }
    else if (probability <= 90) { this._dataService.updateScoreBoard(4) }
    else if (probability <= 96) { this._dataService.updateScoreBoard(6) }
    else { this._dataService.updateScoreBoard(7) }
  }

  onHighRiskSelection() {
    const probability = this._dataService.getProbability();
    if (probability <= 14) { this._dataService.updateScoreBoard(0) }
    else if (probability <= 18) { this._dataService.updateScoreBoard(1) }
    else if (probability <= 27) { this._dataService.updateScoreBoard(2) }
    else if (probability <= 31) { this._dataService.updateScoreBoard(3) }
    else if (probability <= 66) { this._dataService.updateScoreBoard(4) }
    else if (probability <= 90) { this._dataService.updateScoreBoard(6) }
    else { this._dataService.updateScoreBoard(7) }
  }

}
