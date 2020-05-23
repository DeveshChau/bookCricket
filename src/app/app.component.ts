import { Component } from '@angular/core';
import { DataService } from './shared/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookCricket';
  public gameOver: boolean;
  public showMsg: string;
  constructor(private _dataService: DataService) {
    this._dataService.gameOver.subscribe((res: boolean) => {
      this.gameOver = res;
      this.showMsg = 'Game Over: Please Refresh Your Browser To Restart';
    })
  }
}
