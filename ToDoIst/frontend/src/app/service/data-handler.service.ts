import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Category} from '../model/Category';
import {Task} from '../model/Task';
import {Priority} from '../model/Priority';

import {TaskDAOArray} from '../data/dao/implementations/TaskDAOArray';
import {CategoryDAOArray} from '../data/dao/implementations/CategoryDAOArray';
import {PriorityDAOArray} from '../data/dao/implementations/PriorityDAOArray';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private taskDaoArray = new TaskDAOArray(this.http);
  private categoryDaoArray = new CategoryDAOArray(this.http);
  private priorityDaoArray = new PriorityDAOArray(this.http);


  constructor(private http: HttpClient) {
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll();
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryDaoArray.getAll();
  }

  getAllPriorities(): Observable<Priority[]> {
    return this.priorityDaoArray.getAll();
  }

  updateTask(task: Task): Observable<Task> {
    return this.taskDaoArray.update(task);
  }

  // поиск задач по параметрам
  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return this.taskDaoArray.search(category, searchText, status, priority);
  }

  deleteTask(id: number): Observable<Task> {
    return this.taskDaoArray.delete(id);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.categoryDaoArray.update(category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.categoryDaoArray.delete(id);
  }

  addTask(task: Task): Observable<Task> {
    return this.taskDaoArray.add(task);
  }

  addCategory(title): Observable<Category>{
    return this.categoryDaoArray.add(new Category(null, title));
  }

  searchCategories(title): Observable<Category[]> {
    return this.categoryDaoArray.search(title);
  }

  getTasksByCategory(category: Category): Observable<Task[]> {
    return this.taskDaoArray.getTasksByCategory(category);
  }
}

