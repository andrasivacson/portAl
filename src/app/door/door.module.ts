import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { MdProgressSpinnerModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { MomentDate } from '../pipes/moment-date/moment-date.pipe';
import 'hammerjs';

import { RouterModule }   from '@angular/router';

import { DoorComponent } from './door.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';

const doorRoutes =[
  {
    path: 'door',
    component: DoorComponent,
    children: [
        { path: 'admin', component: AdminComponent },
        { path: 'main', component: MainComponent }
      ]
    }  
];

@NgModule({
  imports: [
    CommonModule, FormsModule, BrowserAnimationsModule, MdProgressSpinnerModule, MaterialModule.forRoot(),
    RouterModule.forChild(doorRoutes)
  ],
  declarations: [DoorComponent, MainComponent, AdminComponent, MomentDate],
  exports :[RouterModule]
})
export class DoorModule { }
