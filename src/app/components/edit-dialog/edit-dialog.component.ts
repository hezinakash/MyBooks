import { IBook } from './../../modules/book/book.module';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BookModule } from 'src/app/modules/book/book.module';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {

  title: string;

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookModule) {
      this.title = "Edit book";
     }

  onSubmit($event: IBook) {    
    this.dialogRef.close($event);
  }
}
