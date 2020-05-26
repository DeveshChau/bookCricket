import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnershipComponent } from './partnership/partnership.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "scorecard", component: PartnershipComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
