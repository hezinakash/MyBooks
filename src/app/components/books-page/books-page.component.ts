import { BookService } from './../../services/book-service/book.service';
import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { EditDialogComponent } from './../edit-dialog/edit-dialog.component';
import { AddDialogComponent } from './../add-dialog/add-dialog.component';
import { BookModule } from './../../modules/book/book.module';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { take } from 'rxjs/operators';

@Component({
  selector: 'books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit, OnDestroy {

  books: BookModule[];
  title: string;
  addTitle: string;
  observer;

  constructor(private dialog: MatDialog, private service: BookService) { }

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

  onEdit(book: BookModule) {
    const editDialog = this.dialog.open(EditDialogComponent, {
      data: book
    });
    
    editDialog.afterClosed()
              .pipe(take(1))
              .subscribe(updatedValues => {              
                this.service.update(book.id, updatedValues);
              });
  }

  onDelete(book: BookModule) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: book
    });
    
    confirmDialog.afterClosed()
                  .pipe(take(1))
                  .subscribe(toDelete => {
                    if(toDelete)
                      this.service.delete(book);
                  });
  }

  onAdd() {
    const addDialog = this.dialog.open(AddDialogComponent);

    addDialog.afterClosed()
              .pipe(take(1))
              .subscribe(toAdd => {
                this.service.add(toAdd);
              });
  }

  trackByFunc(index, book) {
    return index;
  }

}
