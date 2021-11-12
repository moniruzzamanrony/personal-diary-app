import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import {NewDiaryComponent} from "./diary/new-diary/new-diary.component";
import {DiariesListComponent} from "./diary/diaries-list/diaries-list.component";
import { CategoriesComponent } from './categories/categories.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent,
    NewDiaryComponent,
    DiariesListComponent,
    CategoriesComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule
    ]
})
export class DashboardModule { }
