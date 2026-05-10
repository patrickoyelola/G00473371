import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  favourites: any[] = [];

  constructor() {

    const stored = localStorage.getItem('favourites');

    if (stored) {
      this.favourites = JSON.parse(stored);
    }
  }

  getFavourites() {
    return this.favourites;
  }

  addFavourite(movie: any) {

    const exists = this.favourites.find(
      m => m.id === movie.id
    );

    if (!exists) {
      this.favourites.push(movie);
      this.save();
    }
  }

  removeFavourite(id: number) {

    this.favourites = this.favourites.filter(
      movie => movie.id !== id
    );

    this.save();
  }

  isFavourite(id: number): boolean {

    return this.favourites.some(
      movie => movie.id === id
    );
  }

  save() {
    localStorage.setItem(
      'favourites',
      JSON.stringify(this.favourites)
    );
  }
}