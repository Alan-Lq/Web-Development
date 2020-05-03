import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-con  firm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})

export class ConfirmDialogComponent implements OnInit {
  public dialogTitle: string;
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>, // для работы с текущим диалог. окном
    @Inject(MAT_DIALOG_DATA) private data: { dialogTitle: string, message: string } // данные, которые передали в диалоговое окно
  ) {
    this.dialogTitle = data.dialogTitle; // заголовок
    this.message = data.message; // сообщение
  }

  ngOnInit() {
  }

  // нажали ОК
  public onConfirm(): void {
    this.dialogRef.close(true);
  }

  // нажали отмену
  public onCancel(): void {
    this.dialogRef.close(false);
  }
}
