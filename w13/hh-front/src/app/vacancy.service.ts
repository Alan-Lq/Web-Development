import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) {}

  getVacancyListByCompany(id): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies`);
  }

  getVacancy(id): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URL}/api/companies/${id}/`);
  }

  deleteVacancy(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/companies/${id}/`);
  }

 
}