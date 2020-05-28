import { Component, OnDestroy, HostListener } from '@angular/core';
import { DataService } from './shared/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookCricket';

  @HostListener('window:beforeunload', ['$event'])
  doSomething($event) {
    $event.returnValue='Your data will be lost!';
  }

}
