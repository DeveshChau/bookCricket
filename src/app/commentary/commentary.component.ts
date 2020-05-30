import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Commentary } from '../shared/model/bookCricket.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css']
})
export class CommentaryComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  overDescription: Commentary[];
  constructor(
    private dataService: DataService) { }
  ngOnInit(): void {
    this.subscription = this.dataService.commentaryObs
      .subscribe(res => {
        this.overDescription = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
