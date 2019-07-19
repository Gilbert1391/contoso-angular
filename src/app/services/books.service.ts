import { Injectable } from "@angular/core";
import data from "../data.json";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  constructor() {}

  getBooks(): BookInterface[] {
    return data;
  }
}

export interface BookInterface {
  id: number;
  name: string;
  author: string;
  img_url: string;
  price: number;
  publication_date: string;
  description: string;
}
