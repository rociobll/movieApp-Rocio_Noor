import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments.ts/environment';

@Injectable({providedIn: 'root'})
export class MovieDbService {
  constructor() { }

  private readonly apiUrl = environment.apiUrl;
  private readonly apiKey = environment.tmdb_key;

  private http = inject(HttpClient);

  getMovies() {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }
}
