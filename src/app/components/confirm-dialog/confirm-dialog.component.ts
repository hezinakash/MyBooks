import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  message: string;
  yesLabel: string;
  noLabel: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book) {
      this.message = "Are you sure you want to delete " + this.data.title + " by " + this.data.author + "?";
      this.yesLabel = "OK";
      this.noLabel = "Cancel";
     }
  
    onConfirm() {
      this.dialogRef.close(true);
    }

    onCancel() {
      this.dialogRef.close(false);
    }

}
