import {TaskDAO} from '../interface/TaskDAO';
import {Category} from '../../../model/Category';
import {Observable, of} from 'rxjs';
import {Priority} from '../../../model/Priority';
import {Task} from 'src/app/model/Task';
import {TestData} from '../../TestData';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class TaskDAOArray implements TaskDAO {
  url = 'http://localhost:8000/app/task/';

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  add(task: Task): Observable<Task> {
    return this.http.put<Task>(this.url, task, this.httpOptions);
  }

  getAll(): Observable<Task[]> {
    let temp: Task[];
    this.http.get<Task[]>(this.url).subscribe(t => temp = t);
    return this.http.get<Task[]>(this.url);
  }

  get(id: number): Observable<Task> {
    return undefined;
  }

  delete(id: number): Observable<Task> {
    const newUrl = `${this.url}${id}`;
    return this.http.delete<Task>(newUrl, this.httpOptions);
  }

  getCompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getTotalCount(): Observable<number> {
    return undefined;
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  // поиск задач по параметрам
  // если значение null - параметр не нужно учитывать при поиске
  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    let tasks;
    this.getAll().subscribe(temp => tasks = temp);
    return of(this.searchTasks(category, searchText, status, priority, tasks));
  }

  getTasksByPriority(priority: Priority): Observable<Task[]> {
    return of();
  }

  getTasksByCategory(category: Category): Observable<Task[]> {
    if (category == null){
      return this.http.get<Task[]>(this.url);
    }
    const newurl = 'http://localhost:8000/app/category/' + category.id + '/tasks';
    return this.http.get<Task[]>(newurl);
  }

  private searchTasks(category: Category, searchText: string, status: boolean, priority: Priority, tasks: Task[]): Task[] {
    let allTasks: Task[] = tasks;

    // поочереди применяем все условия
    if (status != null) {
      allTasks = allTasks.filter(task => task.completed === status);
    }

    if (priority != null) {
      allTasks = allTasks.filter(task => task.priority === priority);
    }

    if (searchText != null) {
      allTasks = allTasks.filter(
        task =>
          task.title.toUpperCase().includes(searchText.toUpperCase()) // учитываем текст поиска (если '' - возвращаются все значения)
      );
    }

    return allTasks;
  }

  update(task: Task): Observable<Task> {
    const newUrl = `${this.url}${task.id}`;
    return this.http.put<Task>(newUrl, task, this.httpOptions);
  }

}
