import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  isError = false
  isSignedIn = false
  constructor(public firebaseService: FirebaseService, private router: Router) { }
  ngOnInit() { }
  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password)
    this.isSignedIn = true
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
      this.router.navigate(['/login'])
    }else {
      this.isSignedIn = false
      this.isError = true
      this.router.navigate(['/signup'])
    }

  }

}
