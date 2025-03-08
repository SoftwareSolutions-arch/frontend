import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  emailSubmitted = false;
  public loading = false;
  forgotForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    otp: new FormControl('', [])
  });

  constructor(
    private router: Router,
    private registerService: RegistrationService,
    private authService: AuthService
  ) {}

  get email() {
    return this.forgotForm.get('email');
  }

  get otp() {
    return this.forgotForm.get('otp');
  }

  onSubmit() {
    if (this.forgotForm.valid && !this.emailSubmitted) {
      this.loading = true;
      let payload={
        email:this.forgotForm.value.email
      }
      this.registerService.dyanmicRoute(payload,'forgot-password').subscribe({
        next: (response) => {
          this.loading = false;
          if (response.status === 'success') {
            this.emailSubmitted = true;
            this.authService.showSuccessToast('OTP sent to your email');
          } else {
            this.authService.showErrorToast('Something went wrong');
          }
        },
        error: (error) => {
          this.authService.showErrorToast(error.error.message);
          this.loading = false;
        }
      });
    }
  }

  editEmail() {
    this.emailSubmitted = false;
    this.forgotForm.get('otp')?.reset();
  }

  submitOTP() {
    if (this.forgotForm.get('otp')?.valid) {
      this.loading = true;
      const payload = {
        email: this.forgotForm.value.email,
        otp: this.forgotForm.value.otp
      };

      this.registerService.dyanmicRoute(payload,'verify-otp').subscribe({
        next: (response) => {
          this.loading = false;
          if (response.status === 'success') {
            this.authService.showSuccessToast('OTP verified successfully');
            sessionStorage.setItem('otpToken', response.token);
            this.router.navigate(['/api/change-password'], { 
              queryParams: { email:this.forgotForm.value.email} 
            });
            
          } else {
            this.authService.showErrorToast('Invalid OTP');
          }
        },
        error: (error) => {
          this.loading = false;
          this.authService.showErrorToast(error.error.message);
        }
      });
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}