import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/core/app.state';
import { loading, selectIsLoading, selectMovieInfo } from 'src/app/store/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latestMovie$: Observable<any> = new Observable()
  loadingMovie$: Observable<any> = new Observable()

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loading())
    this.loadingMovie$ = this.store.select(selectIsLoading)
    this.latestMovie$ = this.store.select(selectMovieInfo)
  }

}
