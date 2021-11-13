import {Injectable} from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  getAccessToken(): any {
    return localStorage.getItem('token');
  }

  getId(): any {
    let token =  this.getAccessToken();
    return Object(jwt_decode(String(token))).id
  }

  getName(): any {
    let token =  this.getAccessToken();
    return Object(jwt_decode(String(token))).name

  }
}
