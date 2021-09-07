import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(registerData: any): Observable<any> {
    return this.http.post<any>(
      'http://apolis-grocery.herokuapp.com/api/auth/register',
      registerData
    );
  }

  /**
   * post the data to the auth login api
   * 
   */

  login(loginData: any) {
    return this.http.post<any>(
      'http://apolis-grocery.herokuapp.com/api/auth/login',
      loginData
    );
  }

  /**
   * to logout we clear the local storage
   */

  logout() {
    localStorage.clear();
  }

  /**
   * checked if logged in
   */

  loggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
