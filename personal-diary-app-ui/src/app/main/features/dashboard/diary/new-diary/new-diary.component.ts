import {Component, OnInit} from '@angular/core';
import {ToastService} from "../../../../share/services/toast.service";
import {FormBuilder, Validators} from "@angular/forms";
import {DailyNoteService} from "../../services/daily-note.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {CategoryModel} from "../../models/category.model";
import {AuthService} from "../../../../share/services/auth.service";

@Component({
  selector: 'app-new-diary',
  templateUrl: './new-diary.component.html',
  styleUrls: ['./new-diary.component.scss']
})
export class NewDiaryComponent implements OnInit {

  dailyNoteFormGroup: any;
  categoryModelList: CategoryModel[] = new Array();
  dairyId: any;
  isEditable: boolean = false;

  constructor(private _dailyNoteService: DailyNoteService,
              private _categoryService: CategoryService,
              public _toastService: ToastService,
              private _formBuilder: FormBuilder,
              private _router: Router,
              private _authService: AuthService,
              private _activatedRoute: ActivatedRoute) {
    this.dairyId= this._activatedRoute.snapshot.params['uuid'];
    this.getCategoriesList();
    if (this.dairyId != undefined)
    {
      this.getDataForUpdate();
      this.isEditable = true;
    }
  }

  ngOnInit(): void {

    this.dailyNoteFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      diaryNote: [''],
      categoryId: [''],
    })
  }

  getCategoriesList(): void {
    this.categoryModelList = [];
    this._categoryService.getCategoriesList().subscribe(result => {
      result.body.forEach((category: any) => {
        if(this._authService.getEmail() === category.createdBy) {
          this.categoryModelList.push({
            id: category.id,
            categoryName: category.categoryName,
            description: category.description
          })
        }
      })

    })
  }

  save() {
    if (!this.dailyNoteFormGroup?.valid) {
      this._toastService.info('Categories name required.')
    } else {
      if(!this.isEditable){
      this._dailyNoteService.saveDairy(this.dailyNoteFormGroup?.value).subscribe(result => {
        this._router.navigate(['home/diaries']);
        this._toastService.success('Save successfully.')
      }, error => {
        this._toastService.error('Save unsuccessfully.')
      })
      }else{
        this._dailyNoteService.updateDairyById(this.dairyId,this.dailyNoteFormGroup?.value).subscribe(result => {
          this._router.navigate(['home/diaries']);
          this._toastService.success('Update successfully.')
        }, error => {
          this._toastService.error('Update unsuccessfully.')
        })
      }
    }
  }

  private getDataForUpdate() {
    this._dailyNoteService.getDairyByUuid(this.dairyId).subscribe(result => {
      this.dailyNoteFormGroup.patchValue({
        title: result.body.title,
        diaryNote: result.body.diaryNote,
        categoryId: result.body.category.id,
      });
    }, error => {
      console.log(error)
    })

  }
}
