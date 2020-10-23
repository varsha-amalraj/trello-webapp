import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [SignupPageComponent, LoginPageComponent, ResultComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [SignupPageComponent]
})
export class LoginModule { }
