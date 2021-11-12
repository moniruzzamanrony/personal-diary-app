import {Component, OnInit} from '@angular/core';
import {ToastService} from "../../../../share/services/toast.service";
import {FormBuilder, Validators} from "@angular/forms";
import {DailyNoteService} from "../../services/daily-note.service";

@Component({
  selector: 'app-new-diary',
  templateUrl: './new-diary.component.html',
  styleUrls: ['./new-diary.component.scss']
})
export class NewDiaryComponent implements OnInit {
  dailyNoteFormGroup: any;

  constructor(private _dailyNoteService: DailyNoteService,
              public _toastService: ToastService,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.dailyNoteFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      diaryNote: [''],
    })
  }


  deleteDiaryNoteById(id: any): void {
    this._dailyNoteService.deleteDiaryNoteById().subscribe(result => {
      this._toastService.success('Delete successfully.')
    })
  }

  save() {
    if (!this.dailyNoteFormGroup?.valid) {
      this._toastService.info('Categories name required.')
    } else {
      console.log(this.dailyNoteFormGroup?.value)
      this._dailyNoteService.saveCategory(this.dailyNoteFormGroup?.value).subscribe(result => {
        this._toastService.success('Save successfully.')
      })
    }
  }
}
