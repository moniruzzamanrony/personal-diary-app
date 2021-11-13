import {Component, OnInit} from '@angular/core';
import {DailyNoteService} from "../../services/daily-note.service";
import {DiaryModel} from "../../models/diary.model";
import {ToastService} from "../../../../share/services/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-diaries-list',
  templateUrl: './diaries-list.component.html',
  styleUrls: ['./diaries-list.component.scss']
})
export class DiariesListComponent implements OnInit {

  diaryModelModelList: DiaryModel[] = new Array();

  constructor(private _dailyNoteService: DailyNoteService,
              private _toastService: ToastService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.getDiariesList();
  }

  getDiariesList(): void {
    this.diaryModelModelList= [];
    this._dailyNoteService.getDiariesList().subscribe(diaries => {
      diaries.body.forEach((diary: any) => {
        this.diaryModelModelList.push({
          id: diary.id,
          category: diary.category,
          title: diary.title,
          dailyNote: diary.dailyNote,
          dateTime: diary.dateTime
        })
      })

    })
  }


  delete(id: any) {
    this._dailyNoteService.deleteDiaryNoteById(id).subscribe(diaries => {
    this._toastService.success("Delete Successfully");
    this.getDiariesList();
    }, error => {
      this._toastService.error("Something want wrong");
    })
  }

  edit(id: any) {
    this._router.navigate(['home/update-diaries/'+id]);
  }
}
