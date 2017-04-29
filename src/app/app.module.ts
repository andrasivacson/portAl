import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { RouterModule }   from '@angular/router';

import { StartPageComponent } from './start-page/start-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found-component';
import { DoorComponent } from './door/door.component';

import { DoorModule }   from './door/door.module';
import { UserService } from './user.service';

const firebaseConfig = {
    apiKey: "AIzaSyB9o47zthwB-oXMmxhY_CYPk1Xkk6rBR1g",
    authDomain: "portal-8cd0a.firebaseapp.com",
    databaseURL: "https://portal-8cd0a.firebaseio.com",
    projectId: "portal-8cd0a",
    storageBucket: "portal-8cd0a.appspot.com",
    messagingSenderId: "375358890598"
};

const routes =[
    //{ path: 'door', component: DoorComponent },
    
    { path: 'home', component: StartPageComponent },
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'door',
        loadChildren: 'app/door/door.module#DoorModule',
        data: { preload: true }
    },
    { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [
      BrowserModule, 
      AngularFireModule.initializeApp(firebaseConfig),
      MaterialModule.forRoot(),
      DoorModule,
      RouterModule.forRoot(routes)
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [StartPageComponent, PageNotFoundComponent,  AppComponent],
    bootstrap:    [ AppComponent ],
    providers:    [ ]
})
export class AppModule { }
