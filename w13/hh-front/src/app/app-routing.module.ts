import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompaniesListComponent} from './companies-list/companies-list.component';
import {CompanyPageComponent} from './company-page/company-page.component';


const routes: Routes = [
  { path: '', component: CompaniesListComponent },
  { path: 'company/:id', component: CompanyPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 