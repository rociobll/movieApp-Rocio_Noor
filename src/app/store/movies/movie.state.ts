// import { initialMovieState } from './movie.state';

// export interface Movie {
//   id: number;
//   title: string;
//   poster_path: string | null;
//   backdrop_path: string | null;
//   overview: string;
//   release_date: string;
//   genre_ids: number[];
//   runtime: number;
//   vote_average: number;
// }

import { Movie } from "../../core/models/movie.model";
import { MovieDetails } from '../../core/models/movie-details';
import { Genre } from '../../core/models/genre.model';

export interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string| null;
  selectedMovie: MovieDetails | null;
  genres: Genre[];
  page: number;
  totalPages: number;
  selectedGenreId : number |null;
}

export const initialMovieState: MovieState = {
  movies: [],
  selectedMovie: null,
  genres: [],
  loading: false,
  error: null,
  page: 1,
  totalPages: 0,
  selectedGenreId: null
};

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
