import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FeaturesModule} from "./main/features/features.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastComponentComponent } from './main/share/components/toast-component/toast-component.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [
    AppComponent,
    ToastComponentComponent
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    AppRoutingModule,
    BrowserAnimationsModule, HttpClientModule, NgbModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
