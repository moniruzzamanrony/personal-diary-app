import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';
import {environment} from "../../../../../environments/environment";
import {EMPTY, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DailyNoteService {

  private personalDiaryBackendHost = environment.personalDiaryBackendHost;

  constructor(private http: HttpClient) {
  }


  deleteDiaryNoteById() : Observable<any>{
    return of(EMPTY);
  }

  saveCategory(value: any): Observable<any> {
    return of(EMPTY);
  }

  getDiariesList():  Observable<any>{
    const json = [{
      id: 1,
      title: 'string',
      dailyNote: 'string',
      dateTime: '12/12/12 12:00'
    }]
    return of(json);
  }
}
