import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category, Priority, Task} from './models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://127.0.0.1:8000/app/';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + 'category/');
  }

  getPriorities(): Observable<Priority[]> {
    return this.http.get<Priority[]>(this.url + 'priority/');
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + 'task/');
  }

  getTasksByCategory(category:Category):  Observable<Task[]> {
    return this.http.get<Task[]>(this.url + 'category/' + category.id + '/tasks');
  }
}
