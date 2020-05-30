import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Commentary } from '../shared/model/bookCricket.model';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css']
})
export class CommentaryComponent implements OnInit {

  overDescription: Commentary[];
  constructor(
    private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.commentaryObs
      .subscribe(res => {
        this.overDescription = res;
      });
  }

}
