import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getTrendingMovies() {
    return this.http.get(
      `${environment.baseUrl}/trending/movie/day?api_key=${environment.apiKey}`
    );
  }

  searchMovies(query: string) {
    return this.http.get(
      `${environment.baseUrl}/search/movie?api_key=${environment.apiKey}&query=${query}`
    );
  }

  getMovieDetails(id: number) {
    return this.http.get(
      `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }

  getMovieCredits(id: number) {
    return this.http.get(
      `${environment.baseUrl}/movie/${id}/credits?api_key=${environment.apiKey}`
    );
  }

  getPersonDetails(id: number) {
    return this.http.get(
      `${environment.baseUrl}/person/${id}?api_key=${environment.apiKey}`
    );
  }

  getPersonMovieCredits(id: number) {
    return this.http.get(
      `${environment.baseUrl}/person/${id}/movie_credits?api_key=${environment.apiKey}`
    );
  }

  getImageUrl(path: string | null): string {
    if (!path) {
      return 'https://via.placeholder.com/500x750?text=No+Image';
    }

    return `${environment.imageUrl}${path}`;
  }
}