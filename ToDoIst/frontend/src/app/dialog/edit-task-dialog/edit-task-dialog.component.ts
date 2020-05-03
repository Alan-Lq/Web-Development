import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Task } from 'src/app/model/Task';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Category';
import {Priority} from '../../model/Priority';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss']
})
export class EditTaskDialogComponent implements OnInit {

  public tmpCategory: Category;

  public categories: Category[];
  public priorities: Priority[];

  public dialogTitle: string; // заголовок окна
  public task: Task; // задача для редактирования/создания

  // сохраняем все значения в отдельные переменные
  // чтобы изменения не сказывались на самой задаче и можно было отменить изменения
  public tmpTitle: string;
  public tmpPriority: Priority;
  public tmpDate: Date;

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>, // // для возможности работы с текущим диалог. окном
    @Inject(MAT_DIALOG_DATA) private data: [Task, string], // данные, которые передали в диалоговое окно
    public dataHandler: DataHandlerService, // ссылка на сервис для работы с данными
    public dialog: MatDialog // для открытия нового диалогового окна
  ) {
  }

  ngOnInit() {
    this.task = this.data[0]; // задача для редактирования/создания
    this.dialogTitle = this.data[1]; // текст для диалогового окна


    // инициализация начальных значений (записывам в отдельные переменные
    // чтобы можно было отменить изменения, а то будут сразу записываться в задачу)
    this.tmpTitle = this.task.title;
    this.tmpPriority = this.task.priority;
    this.tmpCategory = this.task.category;
    this.tmpDate = this.task.date;

    this.dataHandler.getAllCategories().subscribe(items => this.categories = items);
    this.dataHandler.getAllPriorities().subscribe(items => this.priorities = items);

  }

  // нажали ОК
  public onConfirm(): void {

    // считываем все значения для сохранения в поля задачи
    this.task.title = this.tmpTitle;
    this.task.priority = this.tmpPriority;
    this.task.category = this.tmpCategory;
    this.task.date = this.tmpDate;


    // передаем добавленную/измененную задачу в обработчик
    // что с ним будут делать - уже на задача этого компонента
    this.dialogRef.close(this.task);

  }

  // нажали отмену (ничего не сохраняем и закрываем окно)
  public onCancel(): void {
    this.dialogRef.close(null);
  }

  // нажали Удалить
  public delete() {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: {
        dialogTitle: 'Подтвердите действие',
        message: `Вы действительно хотите удалить задачу: "${this.task.title}"?`
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogRef.close('delete'); // нажали удалить
      }
    });
  }

  // нажали Выполнить (завершить) задачу
  public complete() {
    this.dialogRef.close('complete');

  }

  // делаем статус задачи "незавершенным" (активируем)
  public activate() {
    this.dialogRef.close('activate');
  }
}


