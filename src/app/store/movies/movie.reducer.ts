import { Action, createReducer, on } from "@ngrx/store";
import * as MovieActions from './movie.actions';
import { MovieState } from "../core/movie.state";

export const initialMovieState: MovieState = {
    isLoading: false,
    movie: null
};
  
const movieReducerInternal = createReducer(
    initialMovieState,

    on(MovieActions.loading, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
  
    on(MovieActions.loadComplete, (state, { movie, isLoading }) => {
      return {
        ...state,
        movie,
        isLoading,
      };
    })
);
  
export function movieReducer(state: MovieState | undefined, action: Action) {
    return movieReducerInternal(state, action);
}