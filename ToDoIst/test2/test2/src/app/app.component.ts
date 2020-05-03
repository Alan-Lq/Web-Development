import {Component, OnInit} from '@angular/core';
import {Category, Priority, Task} from './models';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test2';

  public tasks: Task[];
  public categories: Category[];
  public priorities: Priority[];

  public selectedCategory: Category;
  public searchText: string;
  public status: boolean;
  public selectedPriority: Priority;


  constructor(public dataHandler: DataService) {
  }

  ngOnInit(): void {
    this.dataHandler.getCategories().subscribe(temp => this.categories = temp);
    this.dataHandler.getTasks().subscribe(temp => this.tasks = temp);
    this.dataHandler.getPriorities().subscribe(temp => this.priorities = temp);
  }

  onSelectCategory(category: Category) {
    this.selectedCategory = category;
    this.onUpdateTask();
  }

  onUpdateTask(){
    this.dataHandler.search(
      this.selectedCategory,
      this.searchText,
      this.status,
      this.selectedPriority
    ).subscribe(temp => this.tasks = temp);
  }

}
