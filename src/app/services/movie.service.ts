import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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

	getRequestToken():Observable<any>{
		let httpOptions = this.setHeaders()
		let path = environment.themoviedb.url + `/authentication/token/new`;
		return this.http.get<any>(path, httpOptions)
	}

	public getSession (username:string,password:string,token:string):Observable<any>{
		let httpOptions = this.setHeaders()
		let path = environment.themoviedb.url + `/authentication/session/new`;
		let body = {
			"username": username,
			"password": password,
			"request_token": token
		}
		return this.http.post<any>(path,body,httpOptions)
	}
}
