import { take, map } from 'rxjs/operators';
import { JsonFileService } from './../jsonFile-service/json-file.service';
import { IBook } from './../../modules/book/book.module';
import { BookModule } from 'src/app/modules/book/book.module';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs';

const INIT_COUNTER_VAL = 2;
const FILE_PATH = "../../assets/books.json";

@Injectable({
  providedIn: 'root'
})
export class BookService { 

  booksList: BookModule[];
  books$ = new BehaviorSubject(this.booksList);
  counter: number;

  constructor(private service: JsonFileService) { 
    this.counter = INIT_COUNTER_VAL;
    this.booksList = [];
  }

  getAll() {
    this.service.readJsonFile(FILE_PATH)
    .pipe(
      take(1),
      map(result => {
        if(result) {
          (result.json() as Array<IBook>).forEach(book => {
            this.booksList.push(new BookModule(book));
          });
        } 

        this.emitChange();
      })
    )
    .subscribe();
  } 

  add(newBook: IBook) {
    if(newBook) {
      newBook.id = (++this.counter).toString();
      const book = new BookModule(newBook);
  
      this.booksList.push(book);
      this.emitChange();
    }
  }

  delete(book: BookModule) {
    const index = this.getBookIndex(book.id);

    if(index >= 0) {
      this.booksList.splice(index, 1);
      this.emitChange();
    }
  } 

  update(bookID: string, update: IBook) {

    if(update) {
      const index = this.getBookIndex(bookID);
      
              if(index >= 0) {
                update.id = this.booksList[index].id;
                this.booksList[index] = new BookModule(update);
                this.emitChange();
              }
    }
  }

  isUniqueTitle(title: string, id: string): Observable<boolean> {
    let isUnique = true;

    this.booksList.forEach(book => {     
      
      if(id !== book.id && book.title.trim() === title.trim()) {
        isUnique = false;
      }
    });

    return of(isUnique);
  }

  private emitChange() {    
    this.books$.next(this.booksList);
  }

  private getBookIndex(bookID: string) {
    let index = -1;

    this.booksList.forEach((b, i) =>{
      if(b.id == bookID) {
        index = i;
      }   
    });

    return index;
  }
}
