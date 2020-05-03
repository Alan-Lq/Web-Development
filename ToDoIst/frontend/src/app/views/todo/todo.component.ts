import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Category';
import {Priority} from '../../model/Priority';

// Мой smart component
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public title = 'Todo';
  public tasks: Task[];
  public categories: Category[]; // все категории
  public priorities: Priority[]; // все приоритеты


  public selectedCategory: Category = null;

  // поиск
  public searchTaskText = ''; // текущее значение для поиска задач
  public searchCategoryText = ''; // текущее значение для поиска категорий


  // фильтрация
  public priorityFilter: Priority;
  public statusFilter: boolean;


  constructor(
    public dataHandler: DataHandlerService, // фасад для работы с данными
  ) { }

  ngOnInit(): void {
    this.dataHandler.getAllPriorities().subscribe(priorities => this.priorities = priorities);
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.onSelectCategory(null); // показать все задачи
  }


  // изменение категории
  public onSelectCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.getTasksByCategory(category).subscribe(temp => this.tasks = temp);
  }

  // удаление категории
  public onDeleteCategory(category: Category) {
    this.dataHandler.deleteCategory(category.id).subscribe(cat => {
      this.selectedCategory = null; // открываем категорию "Все"
      this.onSelectCategory(null);
      this.updateCategories();
    });
  }

  // обновлении категории
  public onUpdateCategory(category: Category) {
    this.dataHandler.updateCategory(category).subscribe(() => {
      this.onSearchCategory(this.searchCategoryText);
      this.updateCategories();
    });
  }

  // обновление задачи
  public onUpdateTask(task: Task) {
    this.dataHandler.updateTask(task).subscribe(cat => {
      this.updateTasks();
    });

  }

  // удаление задачи
  public onDeleteTask(task: Task) {
    this.dataHandler.deleteTask(task.id).subscribe(cat => {
      this.updateTasks();
    });
  }


  // поиск задач
  public onSearchTasks(searchString: string) {
    this.searchTaskText = searchString;
    this.updateTasks();
  }

  // фильтрация задач по статусу (все, решенные, нерешенные)
  public onFilterTasksByStatus(status: boolean) {
    this.statusFilter = status;
    this.updateTasks();
  }

  // фильтрация задач по приоритету
  public onFilterTasksByPriority(priority: Priority) {
    this.priorityFilter = priority;
    this.updateTasks();
  }

  public updateTasks() {
    console.log(this.selectedCategory);
    this.dataHandler.searchTasks(
      this.selectedCategory,
      this.searchTaskText,
      this.statusFilter,
      this.priorityFilter,
    ).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }


  // добавление задачи
  public onAddTask(task: Task) {
    this.dataHandler.addTask(task).subscribe(result => {
      this.updateTasks();
    });

  }

  // добавление категории
  public onAddCategory(title: string) {
    this.dataHandler.addCategory(title).subscribe(() => this.updateCategories());
  }

  public updateCategories() {
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
  }

  // поиск категории
  public onSearchCategory(title: string) {

    this.searchCategoryText = title;

    this.dataHandler.searchCategories(title).subscribe(categories => {
      this.categories = categories;
    });
  }
}
