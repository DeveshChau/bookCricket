import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Scorecard } from '../shared/interface/bookCricket.interface';

@Component({
  selector: 'app-batsman-scorecard',
  templateUrl: './batsman-scorecard.component.html',
  styleUrls: ['./batsman-scorecard.component.css']
})
export class BatsmanScorecardComponent implements OnInit {

  scorecard: Scorecard[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.scorecard = this._dataService.getScorecard();    
  }

}
