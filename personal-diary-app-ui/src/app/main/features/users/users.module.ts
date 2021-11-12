import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        ReactiveFormsModule
    ]
})
export class UsersModule { }
