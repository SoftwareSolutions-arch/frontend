import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../enviorment/enviorment';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = `${environment.baseUrl}`; 
  constructor(private http: HttpClient,private router: Router) {}

  // Register a new user
  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

   // Register a new user
   loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  //dynhamic route 
    dyanmicRoute(data: any,url:any): Observable<any> {
      return this.http.post(`${this.apiUrl}/${url}`, data);
    }
}
