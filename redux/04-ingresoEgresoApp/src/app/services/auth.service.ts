import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Usuario } from '../models/usuario.model';
import { AppState } from '../app.reducer';
import * as authActions from '../auth/auth.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubscription?: Subscription;

  constructor(public auth: AngularFireAuth,
              public firestore: AngularFirestore,
              private store: Store<AppState>
  ) { }

  initAuthListener() {
    this.auth.authState.subscribe(fuser => {
      if (fuser) {
        this.userSubscription = this.firestore.doc(`${fuser.uid}/usuario`).valueChanges()
          .subscribe((firestoreUser: any) => {
            console.log('firestoreUser :>> ', firestoreUser);
            const user = Usuario.fromFirebase(firestoreUser);
            this.store.dispatch(authActions.setUser({ user }));
          }
        );
      } else {
        // Handle unauthenticated state if needed
        this.userSubscription?.unsubscribe();
        console.log('Llamar unsetUser');
        this.store.dispatch(authActions.unSetUser());
      }
    });
  }

  crearUsuario(nombre: string, email: string, password: string) {
    console.log({ nombre, email, password });
    return this.auth.createUserWithEmailAndPassword(email, password).then( ({ user }) => {
      const newUser = new Usuario(nombre, email, user?.uid);
      return this.firestore.doc(`${user?.uid}/usuario`).set({...newUser});
    });
  }

  loginUsuario(email: string, password: string) {
    console.log({email, password});
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  isAuth() {
    return this.auth.authState.pipe(
      map(fuser => fuser != null)
    );
  }
}
