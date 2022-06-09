import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
		private http: HttpClient
  ) { }

	private setHeaders(){
		return {
			headers: new HttpHeaders({
				'Content-Type': 'application/json;charset=utf-8',
				'Authorization': 'Bearer ' + environment.themoviedb.token
			})
		}
	}

	getLatestMovie():Observable<Movie>{
		let httpOptions = this.setHeaders()
		let path = environment.themoviedb.url + `/movie/latest`
		return this.http.get<Movie>(path, httpOptions)
	}
}
