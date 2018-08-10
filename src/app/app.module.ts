import { JsonFileService } from './services/jsonFile-service/json-file.service';
import { EnglishPipe } from './pipes/englishPipe';
import { CapitalizePipe } from './pipes/capitalizePipe';
import { BookService } from './services/book-service/book.service';
import { MaterialsModule } from './modules/materials/materials.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookSingleComponent } from './components/book-single/book-single.component';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BookSingleComponent,
    BooksPageComponent,
    BookFormComponent,
    AddDialogComponent,
    EditDialogComponent,
    ConfirmDialogComponent,
    CapitalizePipe,
    EnglishPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpModule
   ],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    ConfirmDialogComponent
  ],
  providers: [BookService, JsonFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
