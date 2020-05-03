import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task, Category, Priority} from './models';
import {DataService} from './data.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'app';

  public dataSource: MatTableDataSource<Task>;
  public tasks: Task[];
  public categories: Category[];
  public priorities: Priority[];

  public displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category', 'operations', 'select'];

  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort: MatSort;

  constructor(private data: DataService) { }

  onSelect(category: Category) {
    this.data.getTasksByCategory(category).subscribe(temp => this.tasks = temp);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.data.getCategories().subscribe(temp => this.categories = temp);
    this.data.getPriorities().subscribe(temp => this.priorities = temp);
    this.data.getTasks().subscribe(temp => this.tasks = temp);
  }

  public fillTable(): void {

    if (!this.dataSource) {
      return;
    }
    this.dataSource.data = this.tasks; // обновить источник данных
    this.addTableObjects();

    // @ts-ignore
    this.dataSource.sortingDataAccessor = (task, colName) => {

      // по каким полям выполнять сортировку для каждого столбца
      switch (colName) {
        case 'priority': {
          return task.priority ? task.priority.id : null;
        }

        case 'category': {
          return task.category ? task.category.title : null;
        }

        case 'date': {
          return task.date ? task.date : null;
        }

        case 'title': {
          return task.title;
        }
      }
    };
  }


  public addTableObjects(): void {
    this.dataSource.sort = this.sort; // компонент для сортировки данных
    this.dataSource.paginator = this.paginator; // обновить компонент постраничности
  }

  public getPriorityColor(task: Task): string {
    if (task.completed) {
      return '#F8F9FA';
    }
    if (task.priority && task.priority.color) {
      return task.priority.color;
    }
    return '#fff';
  }
}
