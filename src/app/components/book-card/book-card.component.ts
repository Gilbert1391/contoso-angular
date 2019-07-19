import { Component, Input } from "@angular/core";

@Component({
  selector: "book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.css"]
})
export class BookCardComponent {
  constructor() {}

  @Input("price") price: number;

  @Input("name") name: string;

  @Input("img_url") img_url: string;

  @Input("publication_date") publication_date: string;
}
