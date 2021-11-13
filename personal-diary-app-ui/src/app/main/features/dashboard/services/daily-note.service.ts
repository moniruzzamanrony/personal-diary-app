import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';
import {environment} from "../../../../../environments/environment";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DailyNoteService {

  private personalDiaryBackendHost = environment.personalDiaryBackendHost;

  dailyNote: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
  }


  deleteDiaryNoteById(id: any): Observable<any> {
    return this.http.delete(this.personalDiaryBackendHost + 'api/dairies/' + id);
  }

  saveDairy(value: any): Observable<any> {
    return this.http.post(this.personalDiaryBackendHost + 'api/dairies', value);
  }

  updateDairyById(dairyId: any,value: any): Observable<any> {
    return this.http.put(this.personalDiaryBackendHost + 'api/dairies/'+ dairyId, value);
  }

  getDiariesList(): Observable<any> {
    return this.http.get(this.personalDiaryBackendHost + 'api/dairies');
  }

  getDairyByUuid(dairyId: any): Observable<any> {
    return this.http.get(this.personalDiaryBackendHost + 'api/dairies/'+ dairyId);
  }
}
