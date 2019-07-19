import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BooksComponent } from "./components/books/books.component";
import { BookCardComponent } from "./components/book-card/book-card.component";
import { BooksService } from "./services/books.service";
import { LikeComponent } from "./components/like/like.component";
import { NewBookComponent } from "./components/new-book/new-book.component";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookCardComponent,
    LikeComponent,
    NewBookComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
