import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Commentry } from '../shared/interface/bookCricket.interface';

@Component({
  selector: 'app-over-description',
  templateUrl: './over-description.component.html',
  styleUrls: ['./over-description.component.css']
})
export class OverDescriptionComponent implements OnInit {
  overDescription: Commentry[];
  constructor(
    private _dataService: DataService
  ) {
    this._dataService.commentrySub.subscribe(res => {
      this.overDescription = res;
    })
  }

  ngOnInit(): void {
  }

}
