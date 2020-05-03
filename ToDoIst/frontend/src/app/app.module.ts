import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoComponent } from './views/todo/todo.component';
import { NavComponent } from './views/todo/nav/nav.component';
import { TasksComponent } from './views/todo/tasks/tasks.component';
import { CategoriesComponent } from './views/todo/categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { EditTaskDialogComponent } from './dialog/edit-task-dialog/edit-task-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TaskDatePipe } from './pipe/task-date.pipe';

// это нужно для datePipe
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { EditCategoryDialogComponent } from './dialog/edit-category-dialog/edit-category-dialog.component';
import {HttpClientModule} from "@angular/common/http";
registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavComponent,
    TasksComponent,
    CategoriesComponent,
    EditTaskDialogComponent,
    ConfirmDialogComponent,
    TaskDatePipe,
    EditCategoryDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatSliderModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [
    EditTaskDialogComponent,
    ConfirmDialogComponent,
    EditCategoryDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
