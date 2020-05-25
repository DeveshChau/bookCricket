import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { OverDescriptionComponent } from './over-description/over-description.component';
import { RiskSelectionComponent } from './risk-selection/risk-selection.component';
import { BatsmanScorecardComponent } from './batsman-scorecard/batsman-scorecard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    OverDescriptionComponent,
    RiskSelectionComponent,
    BatsmanScorecardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
