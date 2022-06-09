import { AuthState } from "./auth.state";
import { MovieState } from "./movie.state";

export interface AppState {
    auth: AuthState,
    movie: MovieState
}