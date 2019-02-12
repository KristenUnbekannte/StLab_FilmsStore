import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { SessionService } from "./session.service";
import { environment } from "../../environments/environment";

@Injectable()
export class CommentsService {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  getComments(filmId: number): Observable<any> {
    return this.http.get(`${environment.apiHost}/api/comment/${filmId}`);
  }

  addComments(body: object): Observable<any> {
    let httpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${this.sessionService.getItem("token")}`);

    return this.http.post(`${environment.apiHost}/api/comment`, body, {
      headers: httpHeaders
    });
  }
}
