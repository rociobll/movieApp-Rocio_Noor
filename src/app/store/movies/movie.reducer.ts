import { createReducer, on } from "@ngrx/store";
import { initialMovieState, MovieState } from './movie.state';
import * as MovieActions from './movie.actions';


export const movieReducer = createReducer(
  initialMovieState,

  on(MovieActions.loadMovies, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(MovieActions.loadMovieDetails, (state) => ({
    ...state,
    loading: true,
    error: null
  })),



)
