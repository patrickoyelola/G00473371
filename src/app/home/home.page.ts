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
  IonImg
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg
  ],
})
export class HomePage implements OnInit {

  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadTrendingMovies();
  }

  loadTrendingMovies() {
    this.movieService.getTrendingMovies().subscribe((response: any) => {
      this.movies = response.results;
      console.log(this.movies);
    });
  }

  getImage(path: string) {
    return this.movieService.getImageUrl(path);
  }
}