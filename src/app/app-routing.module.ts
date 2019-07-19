import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BooksComponent } from "./components/books/books.component";
import { NewBookComponent } from "./components/new-book/new-book.component";

const routes: Routes = [
  { path: "", component: BooksComponent },
  { path: "new-book", component: NewBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
