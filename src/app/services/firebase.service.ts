import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'; 

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth) { }
   signin(email: string, password: string){
     this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
   signup(email: string, password: string){
     this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
