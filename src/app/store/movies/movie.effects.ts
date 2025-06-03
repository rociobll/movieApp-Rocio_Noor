import { inject, Injectable } from "@angular/core";
import * as MovieActions from './movie.actions';
import { MovieDbService } from '../../core/services/moviedb.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadMovies } from './movie.actions';
import { mergeMap } from "rxjs";


@Injectable()
export class MovieEffects {

   private movieService = inject(MovieDbService);

  constructor(
    private actions$: Actions
  ){}

  // loadMovies$ = createEffect(()=>
  //   this.actions$.pipe(
  //     ofType(MovieActions.loadMovies),
  //     mergeMap(({ page, genreId}) =>
  //       this.movieService.getMoviesByGenre(page, genreId).pipe(
  //         map((response)=>
  //         MovieActions.loadMovieDetails({
  //           movies: response.results,
  //           totalPages: response.total_pages
  //         })
  //       ),
  //       catchError((error)=>
  //         of(MovieActions.loadMovieDetails({ error: error.message}))
  //       )
  //       )
  //     )
  //   )
  // );



}
