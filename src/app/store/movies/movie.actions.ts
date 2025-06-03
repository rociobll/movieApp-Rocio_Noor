import { createAction, props } from "@ngrx/store";
import { MovieDetails } from "../../core/models/movie-details";

export const loadMovies = createAction(
  '[Movies] Load Movies',
  props<{page: number, genreId?: number}>()
);

export const loadMovieDetails = createAction(
  '[Movies] Load Movie Details Success',
  props<{ movies: MovieDetails}>()
);

export const loadGenres = createAction(
 '[Movies] Load Genres');

