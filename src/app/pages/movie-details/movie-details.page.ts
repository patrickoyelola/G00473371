import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

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
    IonCardContent
  ]
})
export class MovieDetailsPage implements OnInit {

  movie: any;
  cast: any[] = [];
  crew: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getMovieDetails(id).subscribe((response: any) => {
      this.movie = response;
    });

    this.movieService.getMovieCredits(id).subscribe((response: any) => {
      this.cast = response.cast.slice(0, 10);
      this.crew = response.crew.slice(0, 10);
    });
  }

  getImage(path: string) {
    return this.movieService.getImageUrl(path);
  }
}