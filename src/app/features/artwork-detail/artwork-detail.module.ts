import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNG
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { ArtworkDetailRoutingModule } from '@features/artwork-detail/artwork-detail-routing.module';
import { ArtworkDetailComponent } from '@features/artwork-detail/components/artwork-detail/artwork-detail.component';


@NgModule({
  declarations: [
    ArtworkDetailComponent
  ],
  imports: [
    CommonModule,
    ArtworkDetailRoutingModule,
    CardModule,
    ProgressSpinnerModule
  ]
})
export class ArtworkDetailModule { }
