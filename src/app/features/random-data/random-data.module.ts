import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG
import { TableModule } from 'primeng/table';

import { RandomDataRoutingModule } from './random-data-routing.module';
import { RandomDataTableComponent } from './components/random-data-table/random-data-table.component';


@NgModule({
  declarations: [
    RandomDataTableComponent
  ],
  imports: [
    CommonModule,
    RandomDataRoutingModule,
    TableModule
  ]
})
export class RandomDataModule { }
