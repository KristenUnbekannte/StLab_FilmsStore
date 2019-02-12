import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { SessionService } from "./session.service";

@Injectable()
export class RatingService {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  addRating(filmId: number, value: number): Observable<any> {
    let httpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${this.sessionService.getItem("token")}`);

    const body = {
      filmId: filmId,
      value: value
    };

    return this.http.post(`${environment.apiHost}/api/rating`, body, {
      headers: httpHeaders
    });
  }

  checkRating(filmId: number): Observable<any> {
    let httpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${this.sessionService.getItem("token")}`);

    return this.http.get(`${environment.apiHost}/api/rating/${filmId}`, {
      headers: httpHeaders
    });
  }
}
