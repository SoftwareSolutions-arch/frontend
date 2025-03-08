// change-password.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  userEmail:any;

  constructor(private fb: FormBuilder, private router: Router,private route: ActivatedRoute,
    private registerService: RegistrationService,
    private authService: AuthService) {
    this.changePasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, this.passwordValidator]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.matchPasswordValidator });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userEmail = params['email'];
    });
    console.log('userEmail',this.userEmail);
  }

  // Custom password validator
  private passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValidLength = value.length >= 8;
    
    if (!hasNumber || !hasSpecialChar || !isValidLength) {
      return { invalidPassword: true };
    }
    return null;
  }

  // Confirm password match validator
  private matchPasswordValidator(group: AbstractControl): { [key: string]: boolean } | null {
    const password = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Getter for easy access to form fields
  get f() {
    return this.changePasswordForm.controls;
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      const payload = {
        email: this.userEmail,
        newPassword: this.changePasswordForm.value.newPassword,
        confirmPassword: this.changePasswordForm.value.confirmPassword
      };

      this.registerService.dyanmicRoute(payload,'change-password').subscribe({
        next: (response) => {
          console.log('response',response);
          if (response.status === 'success') {
            this.authService.showSuccessToast('Password Changed successfully');
            this.router.navigate(['/api/login']);
          } else {
            this.authService.showErrorToast('Something went wrong');
          }
        },
        error: (error) => {
          this.authService.showErrorToast(error.message);
        }
      });
    }
  }
}