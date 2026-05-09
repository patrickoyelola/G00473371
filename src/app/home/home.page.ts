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
  IonSearchbar
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSearchbar
  ],
})
export class HomePage implements OnInit {

  movies: any[] = [];
  searchTerm: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadTrendingMovies();
  }

  loadTrendingMovies() {
    this.movieService.getTrendingMovies().subscribe((response: any) => {
      this.movies = response.results;
    });
  }

  searchMovies() {

    if (this.searchTerm.trim() === '') {
      this.loadTrendingMovies();
      return;
    }

    this.movieService.searchMovies(this.searchTerm)
      .subscribe((response: any) => {
        this.movies = response.results;
      });
  }

  getImage(path: string) {
    return this.movieService.getImageUrl(path);
  }
}