import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { OverDescriptionComponent } from './over-description/over-description.component';
import { RiskSelectionComponent } from './risk-selection/risk-selection.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { BattingScorecardComponent } from './batting-scorecard/batting-scorecard.component';
import { CommentaryComponent } from './commentary/commentary.component';
import { MaterialModule } from './material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    OverDescriptionComponent,
    RiskSelectionComponent,
    PartnershipComponent,
    HomeComponent,
    BattingScorecardComponent,
    CommentaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
