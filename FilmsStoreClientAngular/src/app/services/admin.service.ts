import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { SessionService } from "./session.service";
import { environment } from "../../environments/environment";

@Injectable()
export class AdminService {
  httpHeaders: HttpHeaders;
  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {
    this.httpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${this.sessionService.getItem("token")}`);
  }

  addFilm(body: object): Observable<any> {
    return this.http.post(`${environment.apiHost}/api/admin/film`, body, {
      headers: this.httpHeaders
    });
  }

  deleteFilm(filmId: number): Observable<any> {
    return this.http.delete(`${environment.apiHost}/api/admin/film/${filmId}`, {
      headers: this.httpHeaders
    });
  }

  addImage(body: object): Observable<any> {
    return this.http.post(`${environment.apiHost}/api/admin/image`, body, {
      headers: this.httpHeaders
    });
  }

  deleteImage(imageId: number): Observable<any> {
    return this.http.delete(
      `${environment.apiHost}/api/admin/image/${imageId}`,
      {
        headers: this.httpHeaders
      }
    );
  }
}
