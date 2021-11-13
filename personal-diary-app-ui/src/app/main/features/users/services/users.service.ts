import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';
import {environment} from "../../../../../environments/environment";
import {EMPTY, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private personalDiaryBackendHost = environment.personalDiaryBackendHost;

  constructor(private http: HttpClient) {
  }



  login(body: any) : Observable<any>{
    return this.http.post(this.personalDiaryBackendHost+'public/signin', body);
  }

  signUp(value: any): Observable<any> {
    return this.http.post(this.personalDiaryBackendHost+'public/signup', value);
  }
}
