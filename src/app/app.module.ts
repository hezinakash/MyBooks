import { JsonFileService } from "./services/jsonFile-service/json-file.service";
import { EnglishPipe } from "./pipes/englishPipe";
import { CapitalizePipe } from "./pipes/capitalizePipe";
import { BookService } from "./services/book-service/book.service";
import { MaterialsModule } from "./modules/materials/materials.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BookSingleComponent } from "./components/book-single/book-single.component";
import { BooksPageComponent } from "./components/books-page/books-page.component";
import { BookFormComponent } from "./components/book-form/book-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material";
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { HttpModule } from "@angular/http";
import { BookDialogComponent } from "./components/book-dialog/book-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    BookSingleComponent,
    BooksPageComponent,
    BookFormComponent,
    ConfirmDialogComponent,
    CapitalizePipe,
    EnglishPipe,
    BookDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpModule
  ],
  entryComponents: [ConfirmDialogComponent, BookDialogComponent],
  providers: [BookService, JsonFileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
