import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdProgressSpinnerModule} from '@angular/material';
import 'hammerjs';

import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { MaterialModule } from '@angular/material';
import { DoorComponent } from './door/door.component';
import { AdminComponent } from './admin/admin.component';
import { StartPageComponent } from './start-page/start-page.component';


export const firebaseConfig = {
   apiKey: "AIzaSyB9o47zthwB-oXMmxhY_CYPk1Xkk6rBR1g",
    authDomain: "portal-8cd0a.firebaseapp.com",
    databaseURL: "https://portal-8cd0a.firebaseio.com",
    projectId: "portal-8cd0a",
    storageBucket: "portal-8cd0a.appspot.com",
    messagingSenderId: "375358890598"
};

const routes =[{
  path: '',
  component: StartPageComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'door',
  component: DoorComponent
}];

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MdProgressSpinnerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ AppComponent, DoorComponent, AdminComponent, StartPageComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ]
})
export class AppModule { }
