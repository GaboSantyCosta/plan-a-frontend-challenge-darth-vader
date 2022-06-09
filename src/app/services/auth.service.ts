import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private setHeaders(){
		return {
			headers: new HttpHeaders({
				'Content-Type': 'application/json;charset=utf-8',
				'Authorization': 'Bearer ' + environment.themoviedb.token
			})
		}
	}

	constructor(
		private http: HttpClient
	) { }

	private getToken():Observable<any>{
		let httpOptions = this.setHeaders()
		let path = environment.themoviedb.url + `/authentication/token/new`;
		return this.http.get<any>(path, httpOptions)
	}

	public doLogin (username:string,password:string):Observable<{
		"success": boolean,
		"expires_at": string,
		"request_token": string
	  }>{
		let httpOptions = this.setHeaders()
		let path = environment.themoviedb.url + `/authentication/token/validate_with_login`;
		return this.getToken().pipe(
			switchMap(token=>{
				let body = {
					"username": username,
					"password": password,
					"request_token": token['request_token']
				}
				return this.http.post<any>(path,body,httpOptions)
			})
		)
	}

}
