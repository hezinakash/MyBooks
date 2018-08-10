import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IBook {
  id: string;
  author: string;
  published_date: Date;
  title: string;
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class BookModule {

  private _id: string;
  private _author: string;
  private _published_date: Date;
  private _title: string;

  constructor(@Inject('IBook') iBook: IBook) {
    this._id = iBook.id;
    this._author = iBook.author;
    this._published_date = iBook.published_date;
    this._title = iBook.title;
  }

  get id(): string {
    return this._id;
  }

  get author(): string {
    return this._author;
  }

  get publishedDate(): Date {
    return this._published_date;
  }

  get title(): string{
    return this._title;
  }

  set title(newTitle: string) {
    this._title = newTitle;
  }

  set author(newAuthor: string) {
    this._author = newAuthor;
  }

  set publishedDate(newPublishedDate: Date) {
    this._published_date = newPublishedDate;
  }
 }
