import { createAction, props } from '@ngrx/store';

export const login = createAction(
    '[Auth] login',
    props<{username:string,password:string}>()
);

export const loginComplete = createAction(
    '[Auth] loginComplete',
    props<{ user: any; isLoggedIn: boolean }>()
);
