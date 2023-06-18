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


@NgModule({
  declarations: [
    ArtworkListComponent,
    SearchBoxComponent,
    ArtworkCardComponent
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
