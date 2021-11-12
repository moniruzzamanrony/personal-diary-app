import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';
import {environment} from "../../../../environments/environment";
import {EMPTY, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private personalDiaryBackendHost = environment.personalDiaryBackendHost;

  constructor(private http: HttpClient) {
  }

  getCategoriesList(): Observable<any> {
    const json = [{
      id: 1,
      categoryName: 'string',
      description: 'string'
    }]
    return of(json);
  }

  deleteCategoryById() : Observable<any>{
    return of(EMPTY);
  }

  saveCategory(value: any): Observable<any> {
    return of(EMPTY);
  }
}
