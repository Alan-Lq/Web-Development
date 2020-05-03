import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../../model/Category';
import {DataHandlerService} from '../../../service/data-handler.service';
import {MatDialog} from '@angular/material/dialog';
import {EditCategoryDialogComponent} from '../../../dialog/edit-category-dialog/edit-category-dialog.component';
import {OperType} from '../../../dialog/OperType';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input()
  categories: Category[];

  @Input()
  selectedCategory: Category;


  // выбрали категорию из списка
  @Output()
  selectCategory = new EventEmitter<Category>();

  // удалили категорию
  @Output()
  deleteCategory = new EventEmitter<Category>();

  // изменили категорию
  @Output()
  updateCategory = new EventEmitter<Category>();

  // добавили категорию
  @Output()
  addCategory = new EventEmitter<string>(); // передаем только название новой категории

  // поиск категории
  @Output()
  searchCategory = new EventEmitter<string>(); // передаем строку для поиска


  // для отображения иконки редактирования при наведении на категорию
  public indexMouseMove: number;
  public searchCategoryTitle: string; // текущее значение для поиска категорий


  constructor(
    public dialog: MatDialog, // внедряем MatDialog, чтобы работать с диалоговыми окнами
  ) { }

  ngOnInit() { }

  public showTasksByCategory(category: Category): void {
    if (this.selectedCategory === category) {
      return;
    }
    this.selectedCategory = category; // сохраняем выбранную категорию
    this.selectCategory.emit(this.selectedCategory);
  }

  // сохраняет индекс записи категории, над который в данный момент проходит мышка (и там отображается иконка редактирования)
  public showEditIcon(index: number) {
    this.indexMouseMove = index;

  }

  // диалоговое окно для редактирования категории
  public openEditDialog(category: Category) {
    const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
      data: [category.title, 'Редактирование категории', OperType.EDIT],
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === 'delete') { // нажали удалить

        this.deleteCategory.emit(category);

        return;
      }

      if (result as string) { // нажали сохранить
        category.title = result as string;

        this.updateCategory.emit(category); // вызываем внешний обработчик
        return;
      }
    });
  }

  // диалоговое окно для добавления категории
  public openAddDialog() {

    const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
      data: ['', 'Добавление категории', OperType.ADD],
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addCategory.emit(result as string); // вызываем внешний обработчик
      }
    });
  }

  // поиск категории
  public search() {
    if (this.searchCategoryTitle == null ) {
      return;
    }
    this.searchCategory.emit(this.searchCategoryTitle);

  }

}
