import { Component, OnInit } from "@angular/core";
import { BooksService, BookInterface } from "../../services/books.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) {}

  private books: BookInterface[] = [];

  ngOnInit() {
    this.books = this.booksService.getBooks();
    console.log(this.books);
  }
}
