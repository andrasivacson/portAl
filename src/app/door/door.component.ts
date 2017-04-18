import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../user.service';
import { User } from '../app.interfaces';
import { Observable } from 'rxjs/Observable';

export interface Door {
    isOpen: true;
    lastOpenedOn: Date;
    lastOpenedBy: User;
}

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})

export class DoorComponent implements OnInit {
  door: Observable<Door>
  userList: FirebaseListObservable<User[]>;
  invitedUser: string = '';
  loggerUser: string;

  constructor(public af: AngularFire, public userService: UserService) {
    this.door = af.database.list('/doors/KhskZa0FNVogYdi51JS/', {
      query: {
        orderByChild: 'uid',
        equalTo: this.userService.uid
      }
    }).first();
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
