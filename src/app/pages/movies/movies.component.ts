import { Component, inject, signal } from '@angular/core';
import { MovieDbService } from '../../core/services/moviedb.service';

import { toSignal } from '@angular/core/rxjs-interop';
import { Movie } from '../../core/models/movie.model';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  private readonly tmdbService = inject(MovieDbService);

  movies = signal<Movie[]>([]);
  currentPage = 1;
  genres = toSignal(this.tmdbService.getGenres(), { initialValue: [] });
  selectedGenre = signal<number>(0);

  ngOnInit(): void {
    this.loadMovies();
    // this.tmdbService.getAllMovies(this.currentPage).subscribe((response) => {
    //   this.movies.set(response.results);
    //   console.log(response.results);
    // });
    // ( {
    // next: data => console.log('Pelicualas:' , data),
    // error: err =>console.log('Error', err)
    // });
  }

  loadMovies(): void {
    if (this.selectedGenre()) {
      this.tmdbService
        .getMoviesByGenre(this.selectedGenre(), this.currentPage)
        .subscribe((response) => {
          this.movies.set(response.results);
        });
    } else {
      this.tmdbService.getAllMovies(this.currentPage).subscribe((response) => {
        this.movies.set(response.results);
      });
    }
  }

  onGenreChange(genreId: string): void {
    this.selectedGenre.set(Number(genreId));
    this.loadMovies();
  }
}
