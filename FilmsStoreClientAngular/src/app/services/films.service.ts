import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class FilmsService {
  search_subject: BehaviorSubject<string> = new BehaviorSubject("");

  constructor(private http: HttpClient) {}

  getAllFilms(page: number, search: string): Observable<any> {
    return this.http.get(
      search
        ? `${environment.apiHost}/api/films?page=${page}&search=${search}`
        : `${environment.apiHost}/api/films?page=${page}`
    );
  }

  getFilmDetails(filmId: number): Observable<any> {
    return this.http.get(`${environment.apiHost}/api/films/${filmId}`);
  }

  getTotalRating(filmId: number): Observable<any> {
    return this.http.get(`${environment.apiHost}/api/films/rating/${filmId}`);
  }
}
