import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthEffects } from './auth';
import { AppState } from './core/app.state';
import { MovieEffects } from './movies';
import { movieReducer } from './movies/movie.reducer';

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer,
  movie: movieReducer
};

export const ROOT_EFFECTS = [AuthEffects,MovieEffects];