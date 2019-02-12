import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { SessionService } from "./services/session.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthRoute implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.sessionService.getItem("role") !== "admin") {
      this.router.navigate(["/login"]);
      return false;
    }

    return true;
  }
}
