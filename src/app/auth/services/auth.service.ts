import { Injectable } from '@angular/core';
import { UserModel } from './../../models/user.model';
import { map, Observable, Subscription } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubscription: Subscription = new Subscription();
  private _user: UserModel | null = null;

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    // private store: Store<AppStateLoanSystem>
  ) { }

  get user() {
    return this._user;
  }

  initAuthListener() {
    this.auth.authState.subscribe(
      user => {
        this.dispatchUser(user);
      }
    );
  }

  loginUser(user: UserModel): Observable<any> {
    const { email, password = '' } = user;
    return new Observable(observer => {
      this.auth.signInWithEmailAndPassword(email, password)
      .then(credential => {
        observer.next(credential);
        observer.complete();
      })
      .catch(error => observer.error(error));
    });
  }

  createUser(user: UserModel): Observable<any> {
    const { email, password = '' } = user;
    return new Observable(observer => {
      this.auth.createUserWithEmailAndPassword(email, password)
      .then((credential: any) => {
        const { user: { uid } } = credential;
        user.uid = uid;
        return this.saveUser(user);
      })
      .then(() => {
        observer.next();
        observer.complete();
      })
      .catch(error => observer.error(error));
    });
  }

  logoutUser(): Observable<any> {
    return new Observable(observer => {
      this.auth.signOut()
      .then(() => {
        observer.next();
        observer.complete();
      })
      .catch(error => observer.error(error));
    });
  }

  isAuth(): Observable<any> {
    return this.auth.authState.pipe(
      map(user => user !== null)
    );
  }

  saveUser(user: UserModel): Promise<any> {
    return new Promise((resolve, reject) => {
      delete user.password;
      this.firestore.doc(`${user.uid}/user`)
      .set(user)
      .then(() => resolve(null))
      .catch((error: any) => reject(error));
    });
  }

  private dispatchUser(user: any) {
    if (!!user) {
      this.getUser(user);
    } else {
      this._user = null;
      // this.store.dispatch(authActions.unsetUser());
      if (this.userSubscription) {
        this.userSubscription.unsubscribe();
      }
    }
  }

  private getUser(user: any) {
    this.userSubscription = this.firestore.doc(`${user.uid}/user`).valueChanges().subscribe(
      (fUser: any) => {
        const { uid, name, email } = fUser;
        const newUser: UserModel =  { uid, name, email } as UserModel;
        this._user = { ...newUser } as UserModel;
        // this.store.dispatch(authActions.setUser({user: newUser}));
      }
    );
  }
}
