import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Film } from "../../models/film";
import { DeleteFilmDialogComponent } from "../delete-film-dialog/delete-film-dialog.component";

@Component({
  selector: "admin-film",
  templateUrl: "./admin-film.component.html",
  styleUrls: ["./admin-film.component.scss"]
})
export class AdminFilmComponent {
  @Input() film: Film;
  @Output() deleteFilmEvent = new EventEmitter<number>();

  constructor(public dialog: MatDialog) {}

  deleteFilm(): void {
    const dialogRef = this.dialog.open(DeleteFilmDialogComponent, {
      width: "400px",
      data: {
        filmId: this.film.filmId,
        filmName: this.film.name
      }
    });

    dialogRef;
    dialogRef.afterClosed().subscribe(filmId => {
      if (filmId) {
        this.deleteFilmEvent.emit(filmId);
      }
    });
  }
}
