import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Task } from 'src/app/model/Task';
import {DataHandlerService} from '../../../service/data-handler.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {EditTaskDialogComponent} from '../../../dialog/edit-task-dialog/edit-task-dialog.component';
import {ConfirmDialogComponent} from '../../../dialog/confirm-dialog/confirm-dialog.component';
import {Category} from '../../../model/Category';
import {Priority} from '../../../model/Priority';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  // Источник данных для таблицы
  public dataSource: MatTableDataSource<Task>;


  // ссылки на компоненты таблицы
  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort: MatSort;


  @Output()
  deleteTask = new EventEmitter<Task>();

  @Output()
  selectCategory = new EventEmitter<Category>(); // нажали на категорию из списка задач

  @Output()
  updateTask = new EventEmitter<Task>();

  @Output()
  filterByTitle = new EventEmitter<string>();

  @Output()
  filterByStatus = new EventEmitter<boolean>();

  @Output()
  filterByPriority = new EventEmitter<Priority>();

  @Output()
  addTask = new EventEmitter<Task>();

  // поиск
  public searchTaskText: string; // текущее значение для поиска задач
  public selectedStatusFilter: boolean = null;   // по-умолчанию будут показываться задачи по всем статусам (решенные и нерешенные)
  public selectedPriorityFilter: Priority = null;   // по-умолчанию будут показываться задачи по всем приоритетам


  // поля для таблицы
  public displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category', 'operations', 'select'];

  public priorities: Priority[]; // список приоритетов (для фильтрации задач)
  public tasks: Task[];

  // текущие задачи для отображения на странице
  @Input('tasks')
  private set setTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.fillTable();
  }

  @Input('priorities')
  set setPriorities(priorities: Priority[]) {
    this.priorities = priorities;
  }

  @Input()
  selectedCategory: Category;

  constructor(
    private dialog: MatDialog, // работа с диалоговым окном
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.fillTable();
  }

  // в зависимости от статуса задачи - вернуть цвет названия
  public getPriorityColor(task: Task): string {
    if (task.completed) {
      return '#F8F9FA';
    }
    if (task.priority && task.priority.color) {
      return task.priority.color;
    }
    return '#fff';
  }

  // показывает задачи с применением всех текущий условий (категория, поиск, фильтры и пр.)
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

  // диалоговое редактирования для добавления задачи
  public openEditTaskDialog(task: Task): void {

    // открытие диалогового окна
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      data: [task, 'Редактирование задачи'],
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      // обработка результатов

      if (result === 'complete') {
        task.completed = true; // ставим статус задачи как выполненная
        this.updateTask.emit(task);
      }


      if (result === 'activate') {
        task.completed = false; // возвращаем статус задачи как невыполненная
        this.updateTask.emit(task);
        return;
      }

      if (result === 'delete') {
        this.deleteTask.emit(task);
        return;
      }

      if (result as Task) { // если нажали ОК и есть результат
        this.updateTask.emit(task);
        return;
      }

    });
  }


  // диалоговое окно подтверждения удаления
  public openDeleteDialog(task: Task) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: {
        dialogTitle: 'Подтвердите действие',
        message: `Вы действительно хотите удалить задачу: "${task.title}"?`
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // если нажали ОК
        this.deleteTask.emit(task);
      }
    });
  }

  public onToggleStatus(task: Task) {
    task.completed = !task.completed;
    this.updateTask.emit(task);
  }

  public onSelectCategory(category: Category) {
    this.selectCategory.emit(category);
  }

  // фильтрация по названию
  public onFilterByTitle() {
    this.filterByTitle.emit(this.searchTaskText);
  }

  // фильтрация по статусу
  public onFilterByStatus(value: boolean) {

    // на всякий случай проверяем изменилось ли значение (хотя сам UI компонент должен это делать)
    if (value !== this.selectedStatusFilter) {
      this.selectedStatusFilter = value;
      this.filterByStatus.emit(this.selectedStatusFilter);
    }
  }

  // фильтрация по приоритету
  public onFilterByPriority(value: Priority) {

    // на всякий случай проверяем изменилось ли значение (хотя сам UI компонент должен это делать)
    if (value !== this.selectedPriorityFilter) {
      this.selectedPriorityFilter = value;
      this.filterByPriority.emit(this.selectedPriorityFilter);
    }
  }

  // диалоговое окно для добавления задачи
  public openAddTaskDialog() {

    const task = new Task(null, '', false, null, this.selectedCategory);

    const dialogRef = this.dialog.open(EditTaskDialogComponent, {data: [task, 'Добавление задачи']});

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // если нажали ОК и есть результат
        this.addTask.emit(task);
      }
    });

  }


}
