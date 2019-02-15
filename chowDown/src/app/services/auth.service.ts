import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

    // handle authentication
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }
  doLogin(value) {
        this.firebaseAuth.auth.signInWithEmailAndPassword(value.email, value.password)
           .then((res) => {
              console.log(res);
           })
           .catch((err) => console.log('error: ' + err));
  }
  logout() {
    this.firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }
}
