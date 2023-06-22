import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { HomeRoutingModule } from './home-routing.module';
import { ArtworkListComponent } from './components/artwork-list/artwork-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ArtworkCardComponent } from './components/artwork-card/artwork-card.component';

import { HighlightDirective } from '../../shared/directives/highlight.directive';
import { UppercasePipe } from '../../shared/pipes/uppercase.pipe';


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
    InputTextModule
  ]
})
export class HomeModule { }
