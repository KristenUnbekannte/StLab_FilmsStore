import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { SessionService } from "../services/session.service";
import { FilmsService } from "../services/films.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  search: string = "";

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private location: Location,
    private filmsService: FilmsService
  ) {}

  get userName(): string {
    return this.sessionService.getItem("userName");
  }

  get role(): string {
    return this.sessionService.getItem("role");
  }

  signOut(): void {
    this.sessionService.removeAllItems();
    if (this.location.path().includes("admin")) {
      this.router.navigateByUrl("");
    }
  }

  onSearch(): void {
    this.filmsService.search_subject.next(this.search);
  }
}
