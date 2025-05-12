import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment';
import { Observable, tap, catchError } from 'rxjs';
import { LoginCredentials } from '../../models/request/LoginCredentials';
import { handleHttpError } from '../../../utils/http-error-handler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;
  constructor(private http : HttpClient) { }
  
  login(loginCredentials : LoginCredentials): Observable<any> {
    return this.http.post<{ data: { jwt: string } }>(`${this.apiUrl}/login`, loginCredentials).pipe(
      tap(response => {
        localStorage.setItem('jwt', response.data.jwt); 
      }),
      catchError(handleHttpError)
    );
  }
}
