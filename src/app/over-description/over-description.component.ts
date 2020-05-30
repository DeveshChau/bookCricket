import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Commentary } from '../shared/model/bookCricket.model';
import { takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-over-description',
  templateUrl: './over-description.component.html',
  styleUrls: ['./over-description.component.css']
})
export class OverDescriptionComponent implements OnInit {
  overDescription: Commentary[];
  constructor(
    private dataService: DataService
  ) {

  }
  ngOnInit(): void {
    this.dataService.commentaryObs
      // .pipe(takeLast(1))
      .subscribe(res => {
        this.overDescription = res.length > 10 ? res.slice(-10) : res;
        console.log(this.overDescription);
      });
  }

}

