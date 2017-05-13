import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  // UserService loaded early to do authentication
  providers: [UserService]
})
export class AppComponent  {
  
  constructor() {
  }
}
