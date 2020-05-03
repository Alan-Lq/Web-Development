import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {CategoryDAO} from '../interface/CategoryDAO';
import {Category} from '../../../model/Category';
import {TestData} from '../../TestData';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class CategoryDAOArray implements CategoryDAO {
  url = 'http://localhost:8000/app/category/';

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  get(id: number): Observable<Category> {
    const newurl = `${this.url}${id}`;
    return this.http.get<Category>(newurl);
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  add(category: Category): Observable<Category> {
    return this.http.post<Category>(this.url, category, this.httpOptions);
  }

  delete(id: number): Observable<Category> {
    const newUrl = `${this.url}${id}`;
    return this.http.delete<Category>(newUrl, this.httpOptions);
  }

  update(category: Category): Observable<Category> {
    const newUrl = `${this.url}${category.id}`;
    return this.http.put<Category>(newUrl, category, this.httpOptions);
  }

  search(title: string): Observable<Category[]> {
    return of();
  }

}
