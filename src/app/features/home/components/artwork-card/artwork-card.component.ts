import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from '../../../../models/artwork.model';
import { ArtworkService } from '../../../../core/services/artwork.service';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss']
})
export class ArtworkCardComponent implements OnInit {

  @Input() artwork!: Artwork;

  imageUrl!: string;

  constructor(
    private artworkService: ArtworkService
  ) { }

  ngOnInit(): void {
    this.getImage(this.artwork.image_id)
  }

  getImage(imageId: string): void {
    this.imageUrl = this.artworkService.getImageUrl(imageId);
  }

  truncateText(text: string, maxLength: number): string {
    if (text) {
      if (text?.length <= maxLength) {
        return text;
      } else {
        return text.substr(0, maxLength) + '...';
      }
    }
    return '';
  }

}
