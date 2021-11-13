import {Component, OnInit} from '@angular/core';
import {DailyNoteService} from "../../services/daily-note.service";
import {DiaryModel} from "../../models/diary.model";
import {ToastService} from "../../../../share/services/toast.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../share/services/auth.service";

@Component({
  selector: 'app-diaries-list',
  templateUrl: './diaries-list.component.html',
  styleUrls: ['./diaries-list.component.scss']
})
export class DiariesListComponent implements OnInit {

  diaryModelModelList: DiaryModel[] = new Array();
  diaryModelModelListFromServer: DiaryModel[] = new Array();

  constructor(private _dailyNoteService: DailyNoteService,
              private _toastService: ToastService,
              private _authService: AuthService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.getDiariesList();
  }

  getDiariesList(): void {
    this.diaryModelModelListFromServer = [];
    this._dailyNoteService.getDiariesList().subscribe(diaries => {
      diaries.body.forEach((diary: any) => {
        if (this._authService.getEmail() === diary.createdBy) {
          this.diaryModelModelListFromServer.push({
            id: diary.id,
            category: diary.category,
            title: diary.title,
            dailyNote: diary.diaryNote,
            dateTime: diary.dateTime
          })
          this.diaryModelModelList = this.diaryModelModelListFromServer;
        }
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
    this._router.navigate(['home/update-diaries/' + id]);
  }

  search(event: any) {
    const data = this.diaryModelModelListFromServer.filter(result => String(result.title).toLowerCase().includes(String(event.target.value).toLowerCase())
      || String(result.dateTime).toLowerCase().includes(String(event.target.value).toLowerCase())
      || String(result.dailyNote).toLowerCase().includes(String(event.target.value).toLowerCase())
      || String(result.category.categoryName).toLowerCase().includes(String(event.target.value).toLowerCase()))
    this.diaryModelModelList = data;
  }
}
