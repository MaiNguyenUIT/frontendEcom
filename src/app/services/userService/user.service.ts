import { Injectable } from '@angular/core';
import { environment } from '../../../../environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserInforDTO } from '../../models/request/UserInforDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) {}

   getUserInformation(): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get(`${this.apiUrl}`, { headers });
  }

  getAllUser(): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get(`${this.apiUrl}/users`, { headers });
  }

  getAllSeller(): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get(`${this.apiUrl}/sellers`, { headers });
  }

  getUserById(id: string): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get(`${this.apiUrl}/user/${id}`, { headers });
  }

  updateUser(userData: UserInforDTO): Observable<any> {
    const token = localStorage.getItem('jwt');
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.put(`${this.apiUrl}/information`, userData, { headers });
  }

  blockUser(id: string): Observable<any> {
  const token = localStorage.getItem('jwt');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  const params = new HttpParams().set('userId', id); // truyền id dưới dạng query param

  return this.http.put(`${this.apiUrl}/block`, {}, { headers, params });
}
}
