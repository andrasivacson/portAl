import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../../user.service';
import { User } from '../../app.interfaces';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userList: FirebaseListObservable<User[]>;
  invitedUser: string = '';

  constructor(public af: AngularFire, public userService: UserService) {

    this.userList = af.database.list('/users', {
      query: {
        limitToLast: 50
      }
    });

  }

  Send(value: string) {
      this.userList.push({ email: value});
      this.invitedUser = '';
  }

  Remove(item: any) {
    this.af.database.object('/users/' + item.$key).remove();
  }

  ngOnInit() {
  }

}
