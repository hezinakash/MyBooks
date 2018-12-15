import { BookDialogComponent } from "./../book-dialog/book-dialog.component";
import { BookService } from "./../../services/book-service/book.service";
import { ConfirmDialogComponent } from "./../confirm-dialog/confirm-dialog.component";
import { Book } from "./../../models/book";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material";
import { take } from "rxjs/operators";

@Component({
  selector: "books-page",
  templateUrl: "./books-page.component.html",
  styleUrls: ["./books-page.component.css"]
})
export class BooksPageComponent implements OnInit, OnDestroy {
  books: Book[];
  title: string;
  addTitle: string;
  observer;
  backgroundImg = "assets/images/flying-books.jpg";

  constructor(private dialog: MatDialog, private service: BookService) {}

  ngOnInit() {
    this.title = "Books list";
    this.addTitle = "Add";

    this.observer = this.service.books$.subscribe(result => {
      this.books = result ? [...result] : result;
    });

    this.service.getAll();
  }

  ngOnDestroy() {
    this.service.books$.unsubscribe();
  }

  onEdit(book: Book) {
    const editDialog = this.dialog.open(BookDialogComponent, {
      data: book
    });

    editDialog
      .afterClosed()
      .pipe(take(1))
      .subscribe(updatedValues => {
        this.service.update(book.id, updatedValues);
      });
  }

  onDelete(book: Book) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: book
    });

    confirmDialog
      .afterClosed()
      .pipe(take(1))
      .subscribe(toDelete => {
        if (toDelete) this.service.delete(book);
      });
  }

  onAdd() {
    const addDialog = this.dialog.open(BookDialogComponent, { data: null });

    addDialog
      .afterClosed()
      .pipe(take(1))
      .subscribe(toAdd => {
        this.service.add(toAdd);
      });
  }

  trackByFunc(index, book) {
    return index;
  }

  hasBooks() {
    return (this.books && this.books.length) > 0;
  }
}
