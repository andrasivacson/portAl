import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  {
  userName = null;
  uid: string;
  userList: FirebaseListObservable<any>;
  invitedUser: string = '';

  constructor(public af: AngularFire) {
    this.userList = af.database.list('/users', {
      query: {
        limitToLast: 50
      }
    });

    this.af.auth.subscribe(auth => { 
      if(auth) {
        this.userName = auth.anonymous ? 'Anonymous': auth.auth.displayName;
        this.uid = auth.uid;
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
  }

  Send(value: string) {
      this.userList.push({ email: value});
      this.invitedUser = '';
  }

  Remove(item: any) {
    this.af.database.list('/users/' + item.$key).remove();
    this.invitedUser = '';
  }
}
