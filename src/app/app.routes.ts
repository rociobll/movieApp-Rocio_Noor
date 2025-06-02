import { SeriesComponent } from './pages/series/series.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'',
    redirectTo: 'movies',
    pathMatch: 'full'
  },

  { path: 'movies',
    loadComponent: () =>import('./pages/movies/movies.component').then(m=> m.MoviesComponent)
  },
  { path: 'series',
    loadComponent: () =>import('./pages/series/series.component').then(m=> m.SeriesComponent)
  }
];
