import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-risk-selection',
  templateUrl: './risk-selection.component.html',
  styleUrls: ['./risk-selection.component.css']
})
export class RiskSelectionComponent implements OnInit {

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  onLowRiskSelection() {
    const probability = this._dataService.getProbability();
    if (probability <= 50) { this._dataService.updateScoreBoard(0, 'Low') }
    else if (probability <= 80) { this._dataService.updateScoreBoard(1, 'Low') }
    else if (probability <= 95) { this._dataService.updateScoreBoard(2, 'Low') }
    else if (probability <= 96) { this._dataService.updateScoreBoard(3, 'Low') }
    else if (probability <= 98) { this._dataService.updateScoreBoard(4, 'Low') }
    else if (probability <= 99) { this._dataService.updateScoreBoard(6, 'Low') }
    else { this._dataService.updateScoreBoard(7, 'Low') }
  }

  onMediunRiskSelection() {
    const probability = this._dataService.getProbability();
    if (probability <= 33) { this._dataService.updateScoreBoard(0, 'Mid') }
    else if (probability <= 68) { this._dataService.updateScoreBoard(1, 'Mid') }
    else if (probability <= 80) { this._dataService.updateScoreBoard(2, 'Mid') }
    else if (probability <= 82) { this._dataService.updateScoreBoard(3, 'Mid') }
    else if (probability <= 90) { this._dataService.updateScoreBoard(4, 'Mid') }
    else if (probability <= 96) { this._dataService.updateScoreBoard(6, 'Mid') }
    else { this._dataService.updateScoreBoard(7, 'Mid') }
  }

  onHighRiskSelection() {
    const probability = this._dataService.getProbability();
    if (probability <= 14) { this._dataService.updateScoreBoard(0, 'High') }
    else if (probability <= 18) { this._dataService.updateScoreBoard(1, 'High') }
    else if (probability <= 27) { this._dataService.updateScoreBoard(2, 'High') }
    else if (probability <= 31) { this._dataService.updateScoreBoard(3, 'High') }
    else if (probability <= 66) { this._dataService.updateScoreBoard(4, 'High') }
    else if (probability <= 90) { this._dataService.updateScoreBoard(6, 'High') }
    else { this._dataService.updateScoreBoard(7, 'High') }
  }

}
