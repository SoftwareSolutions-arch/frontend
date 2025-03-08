import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  successMessage = '';
  errorMessage = '';
  isLoading = false;


  constructor(private fb: FormBuilder, private registerService: RegistrationService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, this.domainValidator]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  // Custom domain validator
  domainValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (email && !email.endsWith('@gmail.com')) {
      return { domain: true };
    }
    return null;
  }

  // Custom password validator
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/.test(password);
    if (!hasSpecialChar || !hasNumber) {
      return { pattern: true };
    }
    return null;
  }

  // Custom password match validator
  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  };

  // Toggle password visibility
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Toggle confirm password visibility
  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  // Form submission
  onSubmit(): void {
    if (this.registerForm.valid) {
      this.registerService.createUser(this.registerForm.value).subscribe({
        next: (response) => {
          this.registerForm.reset();
          if (response.status === 'success') {
            this.router.navigate(['/login']);
            this.successMessage = response.message || 'User registered successfully!';
          }
          else{
            this.errorMessage = response.message || 'Something went wrong!';
          }
        },
        error: (error) => {
          this.errorMessage = error.error.message || 'Something went wrong!';
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  // Getters for form controls
  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get mobile() { return this.registerForm.get('mobile'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
}