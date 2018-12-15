import { Inject } from "@angular/core";

export interface IBook {
  id: string;
  author: string;
  published_date: Date;
  title: string;
  imgUrl: string;
}

export class Book {
  private _id: string;
  private _author: string;
  private _publishedDate: Date;
  private _title: string;
  private _imgUrl: string;

  constructor(@Inject("IBook") iBook: IBook) {
    this._id = iBook.id;
    this._author = iBook.author;
    this._publishedDate = iBook.published_date;
    this._title = iBook.title;
    this._imgUrl = iBook.imgUrl;
  }

  get id(): string {
    return this._id;
  }

  get author(): string {
    return this._author;
  }

  get publishedDate(): Date {
    return this._publishedDate;
  }

  get imgUrl(): string {
    return this._imgUrl;
  }

  get title(): string {
    return this._title;
  }

  set title(newTitle: string) {
    this._title = newTitle;
  }

  set author(newAuthor: string) {
    this._author = newAuthor;
  }

  set publishedDate(newPublishedDate: Date) {
    this._publishedDate = newPublishedDate;
  }
}
