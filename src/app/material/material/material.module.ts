import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const material = [
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatChipsModule,
  MatButtonToggleModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
