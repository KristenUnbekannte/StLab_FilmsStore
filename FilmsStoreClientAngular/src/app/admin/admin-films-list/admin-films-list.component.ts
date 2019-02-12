import { Component, OnInit } from "@angular/core";
import { FilmsService } from "../../services/films.service";
import { FilmsInfo } from "../../models/filmsInfo";
import { Film } from "../../models/film";

@Component({
  selector: "admin-films-list",
  templateUrl: "./admin-films-list.component.html",
  styleUrls: ["./admin-films-list.component.scss"]
})
export class AdminFilmsListComponent implements OnInit {
  filmsList: Film[] = [];
  filmsInfo: FilmsInfo;
  page: number = 1;
  search: string = null;

  constructor(private filmsService: FilmsService) {}

  ngOnInit() {
    this.filmsService.search_subject.subscribe(data => {
      this.search = data;
      this.filmsList = [];
      this.page = 1;
      this.getFilms();
    });
  }

  getFilms(): void {
    this.filmsService
      .getAllFilms(this.page, this.search)
      .subscribe((data: FilmsInfo) => {
        this.filmsInfo = data;
        this.filmsList.push(...data.films);

        if (this.filmsList.length < this.filmsInfo.totalCount) {
          this.page++;
          this.getFilms();
        }
      });
  }

  deleteFilmEvent(filmId: number): void {
    this.filmsList = this.filmsList.filter(item => item.filmId !== filmId);
  }
}
