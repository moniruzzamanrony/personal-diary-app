import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewDiaryComponent} from './diary/new-diary/new-diary.component';
import {HomeComponent} from "./home/home.component";
import {DiariesListComponent} from "./diary/diaries-list/diaries-list.component";
import {CategoriesComponent} from "./categories/categories.component";
import {AuthGuard} from "../../share/auth/auth.guard";


const routes: Routes = [
  {
    path: 'home', redirectTo: 'home/diaries'
  },
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'add-new-diary', component: NewDiaryComponent, canActivate: [AuthGuard]},
      {path: 'update-diaries/:uuid', component: NewDiaryComponent, canActivate: [AuthGuard]},
      {path: 'diaries', component: DiariesListComponent, canActivate: [AuthGuard]},
      {path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
