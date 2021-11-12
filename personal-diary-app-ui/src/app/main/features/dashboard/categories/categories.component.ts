import {Component, OnInit} from '@angular/core';
import {CategoryModel} from "../models/category.model";
import {CategoryService} from "../services/category.service";
import {ToastService} from "../../../share/services/toast.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryModelList: CategoryModel[] = new Array();
  formGroup: any;

  constructor(private _categoryService: CategoryService,
              public _toastService: ToastService,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getCategoriesList();
    this.formGroup = this._formBuilder.group({
      categoryName: ['', Validators.required],
      description: [''],
    })
  }

  getCategoriesList(): void {
    this._categoryService.getCategoriesList().subscribe(result => {
      result.forEach((category: any) => {
        this.categoryModelList.push({
          id: category.id,
          categoryName: category.categoryName,
          description: category.description
        })
      })
    })
  }

  deleteCategoryById(id: any): void {
    this._categoryService.deleteCategoryById().subscribe(result => {
      this._toastService.success('Delete successfully.')
    })
  }

  save() {
    if (!this.formGroup?.valid) {
      this._toastService.info('Categories name required.')
    } else {
      this._categoryService.saveCategory(this.formGroup?.value).subscribe(result => {
        this._toastService.success('Save successfully.')
      })
    }
  }
}
