import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../models/user';
import {environment} from '../../../environments/enviroment.dev';
import {Observable, of} from 'rxjs';

@Injectable()
export class UsersServices {

  baseUrl = environment.url;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + '/users', {username: username, password: password});
  }


}



