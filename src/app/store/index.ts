import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthEffects } from './auth';
import { AppState } from './core/app.state';

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer,
};

export const ROOT_EFFECTS = [AuthEffects];