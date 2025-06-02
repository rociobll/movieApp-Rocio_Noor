import { Component, inject } from '@angular/core';
import { MovieDbService } from '../../core/moviedb.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  private readonly tmdbService = inject(MovieDbService);

  ngOnInit(): void {
    this.tmdbService.getMovies().subscribe( {
      next: data => console.log('Pelicualas:' , data),
      error: err =>console.log('Error', err)
    });
  }
}
