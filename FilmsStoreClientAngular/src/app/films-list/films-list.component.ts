import { Component, OnInit } from "@angular/core";
import { FilmsService } from "../services/films.service";
import { FilmsInfo } from "../models/filmsInfo";
import { Film } from "../models/film";

@Component({
  selector: "app-films-list",
  templateUrl: "./films-list.component.html",
  styleUrls: ["./films-list.component.scss"]
})
export class FilmsListComponent implements OnInit {
  filmsList: Film[] = [];
  filmsInfo: FilmsInfo;
  filmsIsLoaded: boolean = false;
  page: number = 1;
  search: string = "";

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
        this.filmsList.push(...data.films);
        this.filmsIsLoaded = true;
      });
  }

  onScroll(): void {
    this.page++;
    this.getFilms();
  }
}
