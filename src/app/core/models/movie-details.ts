import { Genre } from "./genre.model";

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  runtime: number;
  genres: Genre[];
  vote_average: number;
  tagline: string;
  original_language: string;
  status: string;
}
