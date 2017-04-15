import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent }  from './app.component';
import { AngularFireModule } from 'angularfire2';

import {MaterialModule} from '@angular/material';


export const firebaseConfig = {
   apiKey: "AIzaSyB9o47zthwB-oXMmxhY_CYPk1Xkk6rBR1g",
    authDomain: "portal-8cd0a.firebaseapp.com",
    databaseURL: "https://portal-8cd0a.firebaseio.com",
    projectId: "portal-8cd0a",
    storageBucket: "portal-8cd0a.appspot.com",
    messagingSenderId: "375358890598"
};

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
