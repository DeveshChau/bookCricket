import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Commentary } from '../shared/model/bookCricket.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-over-description',
  templateUrl: './over-description.component.html',
  styleUrls: ['./over-description.component.css']
})
export class OverDescriptionComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  overDescription: Commentary[];
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.commentaryObs
      .subscribe(res => {
        this.overDescription = res.slice(-10).reverse();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

