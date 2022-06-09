import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take, tap } from 'rxjs';
import { selectIsAuthenticated } from '../store/auth';
import { AppState } from '../store/core/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ){}

  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select(selectIsAuthenticated).pipe(
      map((isLoggedIn:boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login'])
          return false
        }
        return true
      })
    )
  }
  
}
