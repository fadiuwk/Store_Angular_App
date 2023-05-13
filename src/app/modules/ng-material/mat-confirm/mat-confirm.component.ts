import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-confirm',
  templateUrl: './mat-confirm.component.html',
  styleUrls: ['./mat-confirm.component.scss']
})
export class MatConfirmComponent {

  message = '';

  constructor(
    private dialogRef: MatDialogRef<MatConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data: { message: string }
  ) {
    this.message = data ? data.message : '';
  }
}
