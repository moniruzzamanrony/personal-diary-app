import {Component, OnInit} from '@angular/core';
import {CategoryModel} from "../../models/Category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryModelList: CategoryModel[] = new Array();

  constructor(private _categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategoriesList();
  }

  getCategoriesList(): void {
    this._categoryService.getCategoriesList().subscribe( result=> {
      result.forEach((category: any)=>{
        this.categoryModelList.push({
          id: category.id,
          categoryName: category.categoryName,
          description: category.description
        })
      })
    })
  }

}
