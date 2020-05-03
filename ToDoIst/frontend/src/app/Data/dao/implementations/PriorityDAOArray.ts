import {PriorityDAO} from '../interface/PriorityDAO';
import {Observable, of} from 'rxjs';
import {Priority} from '../../../model/Priority';
import {TestData} from '../../TestData';
import {HttpClient} from '@angular/common/http';

export class PriorityDAOArray implements PriorityDAO {
  url = 'http://localhost:8000/app/priority/';

  constructor(private http: HttpClient) {
  }

  add(T): Observable<Priority> {
    return undefined;
  }

  delete(id: number): Observable<Priority> {
    return undefined;
  }

  get(id: number): Observable<Priority> {
    return undefined;
  }

  getAll(): Observable<Priority[]> {
    return this.http.get<Priority[]>(this.url);
  }

  update(T): Observable<Priority> {
    return undefined;
  }

}
