import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LoginComponent } from './users/login/login.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import {UsersModule} from "./users/users.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardModule,
    UsersModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
