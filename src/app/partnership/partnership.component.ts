import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Partnership } from '../shared/model/bookCricket.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.css']
})
export class PartnershipComponent implements OnInit {

  partnershipCard: Partnership[] = [];
  currentPartnershipCard: Partnership[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.partnershipCard = this.dataService.getPartnerships();
    this.currentPartnershipCard = this.dataService.getCurrentPartnership();
  }
}
