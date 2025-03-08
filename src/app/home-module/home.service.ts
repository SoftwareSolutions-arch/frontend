import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../enviorment/enviorment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = `${environment.baseUrl}`; 
    constructor(private http: HttpClient,private router: Router) {}
  


  // Register a new user
    getUser(): Observable<any> {
      return this.http.get(`${this.apiUrl}/get-users`,{withCredentials: true});
    }

       // Register a new user
   logoutUser(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`,{});
  }
}
