import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';
import {environment} from "../../../../../environments/environment";
import {EMPTY, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private personalDiaryBackendHost = environment.personalDiaryBackendHost;

  constructor(private http: HttpClient) {
  }

  getCategoriesList(): Observable<any> {
    return this.http.get(this.personalDiaryBackendHost+'api/categories');
  }

  deleteCategoryById(id: any) : Observable<any>{
    return this.http.delete(this.personalDiaryBackendHost+'api/categories/'+id);
  }

  saveCategory(value: any): Observable<any> {
    return this.http.post(this.personalDiaryBackendHost+'api/categories',value);
  }

  updateCategory(uuid:any,value: any) {
    return this.http.put(this.personalDiaryBackendHost+'api/categories/'+uuid,value);
  }
}
