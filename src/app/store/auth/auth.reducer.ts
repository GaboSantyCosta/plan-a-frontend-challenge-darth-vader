import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState } from '../core/auth.state';

export const initialAuthState: AuthState = {
    isLoggedIn: false,
    user: null
};

const authReducerInternal = createReducer(
    initialAuthState,
  
    on(AuthActions.loginComplete, (state, { user, isLoggedIn }) => {
      return {
        ...state,
        user,
        isLoggedIn,
      };
    })
);

export function authReducer(state: AuthState | undefined, action: Action) {
    return authReducerInternal(state, action);
}