import { IBook } from './../../models/book';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {
  
  title: string;

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>) { 
    this.title = "Add new book";
  }

  onSubmit($event: IBook) {    
    this.dialogRef.close($event);
  }
}
