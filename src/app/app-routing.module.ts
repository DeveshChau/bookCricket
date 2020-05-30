import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnershipComponent } from './partnership/partnership.component';
import { HomeComponent } from './home/home.component';
import { BattingScorecardComponent } from './batting-scorecard/batting-scorecard.component';
import { CommentaryComponent } from './commentary/commentary.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'partnership', component: PartnershipComponent},
  {path: 'battingScorecard', component: BattingScorecardComponent},
  {path: 'commentary', component: CommentaryComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
