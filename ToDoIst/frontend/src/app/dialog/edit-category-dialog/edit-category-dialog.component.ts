import {Component, Inject, OnInit} from '@angular/core';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {OperType} from "../OperType";

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.scss']
})
export class EditCategoryDialogComponent implements OnInit {

  public dialogTitle: string; // текст для диалогового окна
  public categoryTitle: string; // текст для названия категории (при реактировании или добавлении)
  public operType: OperType; // тип операции

  constructor(
    public dialogRef: MatDialogRef<EditCategoryDialogComponent>, // для работы с текущим диалог. окном
    @Inject(MAT_DIALOG_DATA) public data: [string, string, OperType], // данные, которые передали в диалоговое окно
    public dialog: MatDialog // для открытия нового диалогового окна (из текущего) - например для подтверждения удаления
  ) {
  }

  ngOnInit() {

    // получаем переданные в диалоговое окно данные
    this.categoryTitle = this.data[0];
    this.dialogTitle = this.data[1];
    this.operType = this.data[2]; // тип операции

  }

  // нажали ОК
  public onConfirm() {
    this.dialogRef.close(this.categoryTitle);
  }

  // нажали отмену (ничего не сохраняем и закрываем окно)
  public onCancel() {
    this.dialogRef.close(false);
  }

  // нажали Удалить
  public delete() {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: {
        dialogTitle: 'Подтвердите действие',
        message: `Вы действительно хотите удалить категорию: "${this.categoryTitle}"? (сами задачи не удаляются)`
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogRef.close('delete'); // нажали удалить
      }
    });


  }

  public canDelete(): boolean {
    return this.operType === OperType.EDIT;
  }
}

