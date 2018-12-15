import { Book } from "./../../models/book";
import { Component, Input, Output, EventEmitter } from "@angular/core";

const DEF_IMG = "../../../assets/images/book-def.png";

@Component({
  selector: "book-single",
  templateUrl: "./book-single.component.html",
  styleUrls: ["./book-single.component.css"]
})
export class BookSingleComponent {
  @Input("book") book: Book;
  @Output("edit") edit = new EventEmitter<Book>();
  @Output("delete") delete = new EventEmitter<Book>();

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

  getImgUrl() {
    if (this.book && this.book.imgUrl && this.book.imgUrl.trim() !== "") {
      return this.book.imgUrl;
    } else {
      return DEF_IMG;
    }
  }
}
