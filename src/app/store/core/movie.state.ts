import { Movie } from "src/app/models/movie.model";

export interface MovieState {
    movie: Movie|null;
    isLoading: boolean;
}