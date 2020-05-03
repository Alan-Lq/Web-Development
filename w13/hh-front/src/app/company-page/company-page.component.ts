import { Component, OnInit } from '@angular/core';
import {VacancyService} from "../vacancy.service";
import {Vacancy} from "../models";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {

  vacancies: Vacancy[] = [];
  companyId: any;
  constructor(public vacancyService: VacancyService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.companyId =this.route.snapshot.paramMap.get("id")
    this.getVacancyList(this.companyId);
  }

  getVacancyList(id) {
    this.vacancyService.getVacancyListByCompany(id)
      .subscribe(vacancies => {
        this.vacancies = vacancies
      });
  }
}
