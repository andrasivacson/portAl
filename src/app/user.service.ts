import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class UserService {
  uid: string;
  userName = null;
  authenticationPromise: Promise<FirebaseAuthState>;

  constructor(private af: AngularFire) {
    let resolver = (value?: FirebaseAuthState)  => {};
    this.authenticationPromise = new Promise<FirebaseAuthState>((resolve) => {
      resolver = resolve;
    });

    this.af.auth.subscribe(auth => { 
      if(auth) {
        this.userName = auth.anonymous ? 'Anonymous': auth.auth.displayName;
        this.uid = auth.uid;

        resolver(auth);
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

}
