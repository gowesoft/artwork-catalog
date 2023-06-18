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
  filteredArtworks: any[] = [];
  searchTerm: string = '';

  constructor(
    private authService: AuthService,
    private artworkService: ArtworkService
  ) { }

  ngOnInit(): void {
    this.getArtworks();
  }

  onSearch(value: string): void {
    this.searchTerm = value;
    this.getArtworks();
  }

  getArtworks() {
    this.artworkService.getArtworks(this.searchTerm).subscribe({
      next: data => {
        this.artworks = data.data;
        this.filterArtworks();
      },
      error: error => {
        console.error('Error: ' + error);
      }}
    );
  }

  filterArtworks(): void {
    if (this.searchTerm) {
      this.filteredArtworks = this.artworks.filter(artwork =>
        artwork.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredArtworks = this.artworks;
    }
  }

  onLogout(): void {
    this.authService.logout();
  }

}
