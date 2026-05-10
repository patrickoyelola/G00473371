import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';
import { FavouritesService } from '../../services/favourites';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  ]
})
export class MovieDetailsPage implements OnInit {

  movie: any;
  cast: any[] = [];
  crew: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private favouritesService: FavouritesService
  ) {}

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getMovieDetails(id)
      .subscribe((response: any) => {
        this.movie = response;
      });

    this.movieService.getMovieCredits(id)
      .subscribe((response: any) => {
        this.cast = response.cast.slice(0, 10);
        this.crew = response.crew.slice(0, 10);
      });
  }

  addFavourite() {
    this.favouritesService.addFavourite(this.movie);
  }

  removeFavourite() {
    this.favouritesService.removeFavourite(this.movie.id);
  }

  isFavourite(): boolean {
    return this.favouritesService.isFavourite(this.movie.id);
  }

  getImage(path: string) {
    return this.movieService.getImageUrl(path);
  }
}