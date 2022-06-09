import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { selectUserInfo } from './store/auth';
import { AppState } from './store/core/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user$: Observable<User|null> = new Observable()

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
    this.user$ = this.store.select(selectUserInfo)
  }
}
