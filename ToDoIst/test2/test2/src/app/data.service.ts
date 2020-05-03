import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category, Priority, Task} from "./models";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://127.0.0.1:8000/app/';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + 'category/');
  }

  getPriorities(): Observable<Priority[]> {
    return this.http.get<Priority[]>(this.url + 'priority/');
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + 'task/');
  }

  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return this.searchTasks(category, searchText, status, priority);
  }

  private searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    let newUrl = 'http://127.0.0.1:8000/app/task/?';
    let filter = '';
    let filteredTasks: Task[];

    if(category != null) {
      // console.log(category);
      if (filter !== '' || filter.length !== 0){
        console.log(category);
        filter += '&';
      }
      filter += `category=${category.id}`;
      console.log(newUrl + filter)
    }
    filter += `&priority=${1}`;
    console.log(newUrl + filter);

    return this.http.get<Task[]>(newUrl+ filter);
  }

}
