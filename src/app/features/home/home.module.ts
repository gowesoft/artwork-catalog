import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';

import { HomeRoutingModule } from '@features/home/home-routing.module';
import { ArtworkListComponent } from '@features/home/components/artwork-list/artwork-list.component';
import { SearchBoxComponent } from '@features/home/components/search-box/search-box.component';
import { ArtworkCardComponent } from '@features/home/components/artwork-card/artwork-card.component';

import { HighlightDirective } from '@shared/directives/highlight.directive';
import { UppercasePipe } from '@shared/pipes/uppercase.pipe';


@NgModule({
  declarations: [
    ArtworkListComponent,
    SearchBoxComponent,
    ArtworkCardComponent,
    HighlightDirective,
    UppercasePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ProgressSpinnerModule,
    PaginatorModule
  ]
})
export class HomeModule { }
