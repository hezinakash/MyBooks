import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Book, IBook } from "src/app/models/book";

@Component({
  selector: "book-dialog",
  templateUrl: "./book-dialog.component.html",
  styleUrls: ["./book-dialog.component.css"]
})
export class BookDialogComponent {
  title: string;

  constructor(
    public dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book = null
  ) {
    this.title = data ? "Edit book" : "Add a book";
  }

  onSubmit($event: IBook) {
    this.dialogRef.close($event);
  }
}
