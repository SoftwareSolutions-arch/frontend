import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

   // Save Token
   saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Get Token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Remove Token (Logout)
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']); // Redirect to login page
  }

  // Check if User is Authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Returns true if token exists
  }

  //toast success
  showSuccess(msg:any) {
    Swal.fire({
      title: 'Success!',
      text: msg,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  // model
  showSuccessToast(msg:any) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
  }

  // ✅ Error Toast
  showErrorToast(msg:any) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: msg,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
  }

  setResetPasswordSession() {
    localStorage.setItem('resetPassword', 'true');  // Mark reset session
  }
  
  isResetPasswordSession(): boolean {
    return localStorage.getItem('resetPassword') === 'true';
  }
  
  clearResetPasswordSession() {
    localStorage.removeItem('resetPassword');  // Clear after login
  }
}
