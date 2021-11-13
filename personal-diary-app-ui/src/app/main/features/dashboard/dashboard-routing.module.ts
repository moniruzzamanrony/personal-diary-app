import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewDiaryComponent} from './diary/new-diary/new-diary.component';
import {HomeComponent} from "./home/home.component";
import {DiariesListComponent} from "./diary/diaries-list/diaries-list.component";
import {CategoriesComponent} from "./categories/categories.component";

const routes: Routes = [
  {
    path: 'home', redirectTo: 'home/diaries'
  },
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'add-new-diary', component: NewDiaryComponent},
      {path: 'update-diaries/:uuid', component: NewDiaryComponent},
      {path: 'diaries', component: DiariesListComponent},
      {path: 'categories', component: CategoriesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
