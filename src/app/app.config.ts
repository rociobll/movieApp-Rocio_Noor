import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { MovieEffects } from './store/movies/movie.effects';
import { movieReducer } from './store/movies/movie.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideEffects(),
    provideHttpClient(withFetch()),
    provideStore({movies:movieReducer}),
    provideEffects([MovieEffects])
  ]
};
