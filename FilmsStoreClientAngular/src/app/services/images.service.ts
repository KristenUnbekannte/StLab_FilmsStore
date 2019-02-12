import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class ImagesService {
  constructor(private http: HttpClient) {}

  getImages(filmId: number): Observable<any> {
    return this.http.get(`${environment.apiHost}/api/images/${filmId}`);
  }
}
