import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommentsService } from "../services/comments.service";
import { SessionService } from "../services/session.service";
import { Comment } from "../models/comment";
import { environment } from "../../environments/environment";
import * as signalR from "@aspnet/signalr";

@Component({
  selector: "app-comments-list",
  templateUrl: "./comments-list.component.html",
  styleUrls: ["./comments-list.component.scss"]
})
export class CommentsListComponent implements OnInit {
  comments: Comment[] = [];
  comment: string = "";
  isAuth: boolean = false;
  filmId: number;

  constructor(
    private commentsService: CommentsService,
    private sessionService: SessionService,
    private route: ActivatedRoute
  ) {
    this.isAuth = !!this.sessionService.getItem("token");
  }

  ngOnInit() {
    this.filmId = +this.route.snapshot.paramMap.get("id");

    let connection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.apiHost}/comments`)
      .build();

    connection.start().catch(error => console.log(error));
    connection.on("GetComment", comment => {
      if (comment.filmId === this.filmId) {
        this.comments.push(comment);
      }
    });

    this.commentsService
      .getComments(this.filmId)
      .subscribe((data: Comment[]) => {
        this.comments = data;
      });
  }

  send(): void {
    if (this.comment) {
      const body = {
        filmId: this.filmId,
        message: this.comment,
        date: Date.now(),
        userName: this.sessionService.getItem("userName")
      };
      this.commentsService.addComments(body).subscribe(data => {});
      this.comment = "";
    }
  }
}
