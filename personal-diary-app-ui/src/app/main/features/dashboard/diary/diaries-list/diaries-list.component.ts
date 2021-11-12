import {Component, OnInit} from '@angular/core';
import {DailyNoteService} from "../../services/daily-note.service";
import {DiaryModel} from "../../models/diary.model";

@Component({
  selector: 'app-diaries-list',
  templateUrl: './diaries-list.component.html',
  styleUrls: ['./diaries-list.component.scss']
})
export class DiariesListComponent implements OnInit {

  diaryModelModelList: DiaryModel[] = new Array();

  constructor(private _dailyNoteService: DailyNoteService) {
  }

  ngOnInit(): void {
    this.getDiariesList();
  }

  getDiariesList(): void {
    this._dailyNoteService.getDiariesList().subscribe(diaries => {
      diaries.forEach((diary: any) => {
        this.diaryModelModelList.push({
          id: diary.id,
          title: diary.title,
          dailyNote: diary.dailyNote,
          dateTime: diary.dateTime
        })
      })
    })
  }
}
