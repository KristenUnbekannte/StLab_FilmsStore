import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  login(userName: string, password: string): Observable<any> {
    const body = {
      userName: userName,
      password: password
    };
    return this.http.post(`${environment.apiHost}/api/account/login`, body);
  }

  register(userName: string, password: string): Observable<any> {
    const body = {
      userName: userName,
      password: password
    };
    return this.http.post(`${environment.apiHost}/api/account/register`, body);
  }
}
