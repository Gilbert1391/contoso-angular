import { Component } from "@angular/core";

@Component({
  selector: "like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.css"]
})
export class LikeComponent {
  constructor() {}

  likesCount: number = 0;
  dislikesCount: number = 0;

  onLiked() {
    this.likesCount++;
  }

  onDisliked() {
    this.dislikesCount--;
  }
}
