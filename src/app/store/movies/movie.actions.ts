import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/models/movie.model';

export const loading = createAction(
    '[Movie] loading',
);

export const loadComplete = createAction(
    '[Movie] loadComplete',
    props<{ movie: Movie; isLoading: boolean }>()
);