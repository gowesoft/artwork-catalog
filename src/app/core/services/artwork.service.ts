import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  private apiUrl = 'https://api.artic.edu/api/v1/artworks/';
  private imageUrl = 'https://www.artic.edu/iiif/2/';

  constructor(private http: HttpClient) { }

  getArtworks(searchTerm: string, page: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}search?q=${searchTerm}&page=${page}&limit=${limit}&fields=id,title,artist_title,place_of_origin,date_display,thumbnail,image_id`);
  }

  getImageUrl(imageId: string): string {
    return `${this.imageUrl}/${imageId}/full/843,/0/default.jpg`;
  }

  getArtwork(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}`);
  }

}
