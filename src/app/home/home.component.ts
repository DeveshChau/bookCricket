import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public gameOver: boolean;
  public showMsg: string;
  constructor(private _dataService: DataService) {
    this._dataService.gameOver.subscribe((res: boolean) => {
      this.gameOver = res;
      this.showMsg = 'Game Over: Please Refresh Your Browser To Restart';
    })
  }
  ngOnInit(): void {
  }

}
