import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Partnership } from '../shared/interface/bookCricket.interface';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.css']
})
export class PartnershipComponent implements OnInit {

  partnershipCard: Partnership[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.partnershipCard = this._dataService.getPartnershipCard();    
  }

}
