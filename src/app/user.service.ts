import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class UserService {
  authenticatedUser: firebase.UserInfo;
  authenticationPromise: Promise<firebase.UserInfo>;

  constructor(private af: AngularFire) {
    let resolver = (value?: firebase.UserInfo)  => {};
    this.authenticationPromise = new Promise<firebase.UserInfo>((resolve) => {
      resolver = resolve;
    });

    this.af.auth.subscribe(auth => { 
      if(auth) {
        // TODO: remove hardcoded authentication
        this.authenticatedUser = auth.google;
        resolver(this.authenticatedUser);
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
