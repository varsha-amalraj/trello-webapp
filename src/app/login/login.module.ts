import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [SignupPageComponent, LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [SignupPageComponent]
})
export class LoginModule { }
