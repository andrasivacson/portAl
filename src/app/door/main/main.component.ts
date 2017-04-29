import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../../user.service';
import { User } from '../../app.interfaces';
import { Observable } from 'rxjs/Observable';

export interface Door {
    name: string;
    isOpen: string;
    lastChangedOn: Date;
    lastChangedBy: User;
}

@Component({
  selector: 'app-door',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  door: FirebaseObjectObservable<Door>;
  door_value: Door;
  doorLoading: boolean;  
  loggedUser: string;
  
  constructor(public af: AngularFire, public userService: UserService) {

    this.doorLoading = true;

    this.door = af.database.object('/doors/-KhskZa0FNVogYdi51JS');
    this.door.subscribe( door => {
      if(!this.door_value) {this.doorLoading = false;}
      this.door_value = door;
    });
  } 

  ToggleDoor(door: FirebaseObjectObservable<Door>) {
    // delayed display to avoid flickering
    let cancelId = setTimeout(_ =>this.doorLoading = true, 250);
    
    door.update({
        isOpen: !this.door_value.isOpen,
        lastChangedOn: (new Date).toISOString(),
        lastChangedBy: this.userService.userName
      }).then(_ => {
        (<any>window).clearTimeout(cancelId);
        this.doorLoading = false;
      });
      
  }

  ngOnInit() {
  }

}
