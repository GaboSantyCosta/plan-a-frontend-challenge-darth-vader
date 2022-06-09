import { createSelector } from "@ngrx/store";
import { AppState } from "../core/app.state";
import { MovieState } from "../core/movie.state";

export const getMovieFeatureState = (state: AppState) => state.movie

export const selectIsLoading = createSelector(
    getMovieFeatureState,
    (state: MovieState) => state.isLoading
);
  
export const selectMovieInfo = createSelector(
    getMovieFeatureState,
    (state: MovieState) => state.movie
);