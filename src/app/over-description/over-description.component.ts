import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Commentary } from '../shared/interface/bookCricket.interface';

@Component({
  selector: 'app-over-description',
  templateUrl: './over-description.component.html',
  styleUrls: ['./over-description.component.css']
})
export class OverDescriptionComponent implements OnInit {
  overDescription: Commentary[];
  constructor(
    private _dataService: DataService
  ) {
    this._dataService.commentarySub
    .subscribe(res => {
      this.overDescription = res      
    })
  }
  ngOnInit(): void { 
  }

}
