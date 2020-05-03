import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompaniesListComponent} from './companies-list/companies-list.component';
import {CompanyPageComponent} from './company-page/company-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    CompaniesListComponent,
    CompanyPageComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}