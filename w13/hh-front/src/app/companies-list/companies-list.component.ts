import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../company.service";
import {Company} from "../models";

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  companies: Company[] = [];

  constructor(public companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getCompanyList();
  }

  getCompanyList() {
    this.companyService.getCompanyList()
      .subscribe(companies => {
        this.companies = companies
      });
  }

  deleteCompany(id) {
    this.companyService.deleteCompany(id).subscribe(res => {
      // this.companies = this.companies.filter(c => c.id != id);
      // this.getcompanyList();
    });
  }

}