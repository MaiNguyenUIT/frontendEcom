import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment';
import { Observable, tap, catchError } from 'rxjs';
import { LoginCredentials } from '../../models/request/LoginCredentials';
import { handleHttpError } from '../../../utils/http-error-handler';
import { RegisterCredentials } from '../../models/request/RegisterCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;
  constructor(private http : HttpClient) { }
  
  login(loginCredentials : LoginCredentials): Observable<any> {
    return this.http.post<{ jwt: string }>(`${this.apiUrl}/login`, loginCredentials).pipe(
      tap(response => {
        localStorage.setItem('jwt', response.jwt); 
      }),
      catchError(handleHttpError)
    );
  }

  register(registerCredentials : RegisterCredentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, registerCredentials, { responseType: 'text' }).pipe(
      catchError(handleHttpError)
    );
  }

  logout() {
    localStorage.removeItem('jwt');
  }

  getJwt(): string | null {
    return localStorage.getItem('jwt');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }
}
