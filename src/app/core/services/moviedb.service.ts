import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments.ts/environment';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre.model';
import { MovieResponse } from '../../store/movies/movie.state';
import { MovieDetails } from '../models/movie-details';
import { Movie } from '../models/movie.model';

@Injectable({providedIn: 'root'})
export class MovieDbService {
  constructor() { }


  private readonly apiUrl = environment.apiUrl;
  private readonly apiKey = environment.tmdb_key;

  private http = inject(HttpClient);

//todas las pelis
  getAllMovies(page = 1): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.apiUrl}/discover/movie?page=${page}&api_key=${this.apiKey}`);
  }
//peliculas más populares en el momento
  getPopularMovies(page = 1) {
    return this.http.get(`${this.apiUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`);
  }
//filtra pelicular por género
  getMoviesByGenre(genreId:number, page=1) {
    return this.http.get<MovieResponse>(`${this.apiUrl}/search/movie?query=${genreId}&page=${page}&api_key=${this.apiKey}`);
  }
//devolver detalles de una pelicula por su id
  getMovieDetails(id:number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }
//buscar películas según palabra-query
  searchMovie(query: string, page=1) {
    return this.http.get(`${this.apiUrl}/search/movie?query=${query}&page=${page}&api_key=${this.apiKey}`);
  }
//obtener los géneros disponibles para desplegable de filtro por género
  getGenres() {
    return this.http.get<Genre[]>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`);
  }

 }
