import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
    {path:'signup',component:SignupPageComponent},
    {path:'login',component:LoginPageComponent},
    {path:'result',component:ResultComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
