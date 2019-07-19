import { BooksService, BookInterface } from "./../../services/books.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-book",
  templateUrl: "./new-book.component.html",
  styleUrls: ["./new-book.component.css"]
})
export class NewBookComponent implements OnInit {
  constructor(private booksService: BooksService) {}

  isSubmitted: boolean = false;
  loading: boolean = false;

  ngOnInit() {}

  async onSubmit(form): Promise<void> {
    const {
      name,
      author,
      img_url,
      price,
      description,
      publication_date
    }: BookInterface = form.value;

    const books = this.booksService.getBooks();
    const id = books.length + 1;
    this.loading = true;
    console.log("Resolving promise...");
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        this.loading = false;
        resolve();
      }, 1500);
    });
    console.log("Promise Resolved");

    books.push({
      id,
      name,
      author,
      img_url,
      price,
      description,
      publication_date
    });

    this.isSubmitted = true;
  }
}
