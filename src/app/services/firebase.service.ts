import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false
  uId
  constructor(public firebaseAuth: AngularFireAuth) { }
  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user))
        // console.log("login",res.user);
        return res.user.uid
      })
      .catch(error => {
        this.isLoggedIn = false;
      })
  }
  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
      .catch(error => {
        this.isLoggedIn = false;
      })
  }
  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
  async user() {
    this.uId = await this.firebaseAuth.currentUser
    .then(user => user.uid);
  }
}
