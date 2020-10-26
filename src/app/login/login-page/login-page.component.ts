import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isSignedIn = false
  isError = false
  constructor(public firebaseService: FirebaseService, private router: Router) { }
  ngOnInit() {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password)
    if (this.firebaseService.isLoggedIn){
      this.isSignedIn = true
      this.isError = false
      this.router.navigate(['/boards'])
    }else{
      this.isSignedIn = false
      this.isError = true
      this.router.navigate(['/login'])
    }
  }
  handleLogout() {
    this.isSignedIn = false
  }

}
