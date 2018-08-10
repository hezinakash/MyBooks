import { BookModule } from './../../modules/book/book.module';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-single',
  templateUrl: './book-single.component.html',
  styleUrls: ['./book-single.component.css']
})
export class BookSingleComponent {

  @Input("book") book: BookModule;
  @Output("edit") edit = new EventEmitter<BookModule>();
  @Output("delete") delete= new EventEmitter<BookModule>();

  editTitle: string;
  deleteTitle: string;
  
  constructor() { 
    this.editTitle = "Edit";
    this.deleteTitle = "Delete";
  }

  onEdit($event) {
    this.edit.emit(this.book);
  }

  onDelete($event) {
    this.delete.emit(this.book);
  }
}
