import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../core/services/auth.service';
import { ArtworkService } from '../../../../core/services/artwork.service';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.scss']
})
export class ArtworkListComponent implements OnInit {

  artworks: any[] = [];
  searchTerm: string = '';
  loading: boolean = false;
  page: number = 1;
  limit: number = 12;
  totalRecords: number = 0;

  constructor(
    private authService: AuthService,
    private artworkService: ArtworkService
  ) { }

  ngOnInit(): void {
    this.getArtworks();
  }

  onSearch(value: string): void {
    this.searchTerm = value;
    this.page = 1;
    this.getArtworks(null);
  }

  getArtworks(event?: any) {
    this.loading = true;
    this.page = event?.page ? event.page : this.page;
    this.limit = event?.rows ? event.rows : this.limit;
    this.artworkService.getArtworks(this.searchTerm, this.page, this.limit).subscribe({
      next: data => {
        this.artworks = data.data;
        this.totalRecords = data.pagination.total;
      },
      error: error => {
        console.error('Error: ' + error);
      },
      complete: () => this.loading = false
    });
  }

  onLogout(): void {
    this.authService.logout();
  }

}
