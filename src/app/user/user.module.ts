/**
 * Created by stefan.trajkovic on 12.4.2017..
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {userRoutes} from "./user.routes";
import {ProfileComponent} from "./profile.component";
import {LoginComponent} from "./login.component";



@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: []
})
export class UserModule { }
