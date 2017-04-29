import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  providers: [UserService]
})
export class StartPageComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) {

    userService.authenticationPromise.then(auth => { 
      if(auth) {
        this.router.navigate(['door/main']);
      }
    });
    
  }

  login() {
    this.userService.login();
  }

  ngOnInit() {
  }

}
