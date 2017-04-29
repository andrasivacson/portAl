import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../user.service';

@Component({
  templateUrl: 'door.component.html',
  styleUrls: ['door.component.css'],
  providers: [UserService]
})
export class DoorComponent  {
  
  constructor(public af: AngularFire, public userService: UserService) {
    
  }
}
