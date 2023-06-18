import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomDataRoutingModule } from './random-data-routing.module';
import { RandomDataTableComponent } from './components/random-data-table/random-data-table.component';


@NgModule({
  declarations: [
    RandomDataTableComponent
  ],
  imports: [
    CommonModule,
    RandomDataRoutingModule
  ]
})
export class RandomDataModule { }
