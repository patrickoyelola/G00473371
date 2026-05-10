import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { FavouritesService } from '../../services/favourites';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
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
    IonButton
  ]
})
export class FavouritesPage implements OnInit {

  favourites: any[] = [];

  constructor(
    private favouritesService: FavouritesService,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.loadFavourites();
  }

  ionViewWillEnter() {
    this.loadFavourites();
  }

  loadFavourites() {
    this.favourites = this.favouritesService.getFavourites();
  }

  getImage(path: string) {
    return this.movieService.getImageUrl(path);
  }
}