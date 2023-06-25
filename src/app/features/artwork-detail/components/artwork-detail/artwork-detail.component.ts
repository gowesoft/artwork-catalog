import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { finalize, shareReplay, switchMap, takeUntil, tap } from 'rxjs/operators';

import { ArtworkService } from '@core/services/artwork.service';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.scss']
})
export class ArtworkDetailComponent implements OnInit, OnDestroy {

  artwork!: any;
  imageUrl!: string;
  loading: boolean = false;
  private unsubscribe$ = new Subject<void>();
  private subscription!: Subscription;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private artworkService: ArtworkService
  ) { }

  ngOnInit(): void {
    this.getArtwork();
  }

  getArtwork(): void {
    this.loading = true;
    this.subscription = this.route.params.pipe(
      tap(params => this.getImage(params['imageId'])),
      switchMap(params => this.artworkService.getArtwork(params['id'])),
      takeUntil(this.unsubscribe$)
    ).subscribe({
      next: artwork => {
        this.artwork = artwork;
        this.loading = false;
      },
      error: error => {
        this.loading = false;
      }
  });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getImage(imageId: string): void {
    this.imageUrl = this.artworkService.getImageUrl(imageId);
  }
}
