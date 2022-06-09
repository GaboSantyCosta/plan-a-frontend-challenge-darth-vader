import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppState } from '../core/app.state';
import { AuthState } from '../core/auth.state';

export const getAuthFeatureState = (state: AppState) => state.auth

export const selectIsAuthenticated = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.isLoggedIn
);
  
export const selectUserInfo = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.user
);
