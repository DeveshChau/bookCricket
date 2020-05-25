import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatsmanScorecardComponent } from './batsman-scorecard/batsman-scorecard.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "scorecard", component: BatsmanScorecardComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
