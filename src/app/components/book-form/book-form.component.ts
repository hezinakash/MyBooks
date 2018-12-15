import { take, map } from "rxjs/operators";
import { BookService } from "./../../services/book-service/book.service";
import { IBook, Book } from "./../../models/book";
import { InputFieldValidators } from "./../../validators/inputFieldValidators";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "book-form",
  templateUrl: "./book-form.component.html",
  styleUrls: ["./book-form.component.css"]
})
export class BookFormComponent implements OnInit {
  @Input("book") book: Book;
  @Output("onsubmit") submit = new EventEmitter<any>();

  bookForm;
  today: Date;

  constructor(private fb: FormBuilder, private service: BookService) {
    this.today = new Date();
  }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: [
        this.book ? this.book.title : "",
        [Validators.required, InputFieldValidators.notEmptyFieldValidator],
        this.uniqueNameValidator.bind(this)
      ],
      author: [
        this.book ? this.book.author : "",
        [Validators.required, InputFieldValidators.notEmptyFieldValidator]
      ],
      publishedDate: [
        this.book ? new Date(this.book.publishedDate) : "",
        Validators.required
      ],
      imgUrl: [this.book ? this.book.imgUrl : ""]
    });
  }

  get title() {
    return this.bookForm.controls.title;
  }

  get author() {
    return this.bookForm.controls.author;
  }

  get publishedDate() {
    return this.bookForm.controls.publishedDate;
  }

  get imgUrl() {
    return this.bookForm.controls.imgUrl;
  }

  onSubmit($event) {
    const iBook = this.formValueToIBook();
    console.log(iBook);

    this.submit.emit(iBook);
  }

  private formValueToIBook(): IBook {
    return {
      title: this.title.value,
      author: this.author.value,
      published_date: this.publishedDate.value,
      imgUrl: this.imgUrl.value,
      id: null
    };
  }

  private uniqueNameValidator(
    c: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.service
      .isUniqueTitle(
        (c.value as string).trim(),
        this.book ? this.book.id : null
      )
      .pipe(
        take(1),
        map(isUnique => {
          return isUnique ? null : { uniqueNameValidator: true };
        })
      );
  }
}
