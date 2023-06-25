import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG
import { TableModule } from 'primeng/table';

import { RandomDataRoutingModule } from '@features/random-data/random-data-routing.module';
import { RandomDataTableComponent } from '@features/random-data/components/random-data-table/random-data-table.component';


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
