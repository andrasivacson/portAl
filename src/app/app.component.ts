import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', '../../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css'],
  providers: [UserService]
})
export class AppComponent  {
  
  constructor(public af: AngularFire, public userService: UserService) {
    this.af.auth.subscribe(auth => { 
      if(auth) {
        this.userService.userName = auth.anonymous ? 'Anonymous': auth.auth.displayName;
        this.userService.uid = auth.uid;
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
