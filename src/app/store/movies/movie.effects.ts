import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { Movie } from "src/app/models/movie.model";
import { MovieService } from "src/app/services/movie.service";
import * as fromMovieActions from './movie.actions';

@Injectable()
export class MovieEffects {

    movie$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromMovieActions.loading),
            mergeMap(() => this.movieService.getLatestMovie()
                .pipe(
                    map((movie: Movie) => ({type:'[Movie] loadComplete', movie})),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private movieService: MovieService,
    ){}

}