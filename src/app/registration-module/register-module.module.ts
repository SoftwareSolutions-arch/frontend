import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterRoute } from './register-route.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RegisterRoute,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    RegistrationService
  ]
})
export class RegisterModule { }
