import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import * as fromAuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

    auth$ = createEffect(
        ()=>this.actions$.pipe(
            ofType(fromAuthActions.login),
            mergeMap((actions) => this.authService.doLogin(actions.username,actions.password)
                .pipe(
                    map(() => ({type:'[Auth] loginComplete',user:actions.username,isLoggedIn:true})),
                    catchError(()=>EMPTY)
                )
            ),
            tap(() => this.router.navigate(['/']))
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ){}
    
}
