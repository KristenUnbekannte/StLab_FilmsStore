import { Component, Inject, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { RatingService } from "../services/rating.service";
import { FilmsService } from "../services/films.service";

export interface DialogData {
  filmId: number;
}

@Component({
  selector: "stars-rating",
  templateUrl: "stars-rating.component.html",
  styleUrls: ["stars-rating.component.scss"]
})
export class StarsRatingComponent {
  @Output() rating: number = 0;

  constructor(
    private dialogRef: MatDialogRef<StarsRatingComponent>,
    private ratingService: RatingService,
    private filmsService: FilmsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    dialogRef.disableClose = true;
  }

  onRatingChange(event): void {
    this.rating = event.rating;
  }

  ok(): void {
    if (this.rating) {
      this.ratingService
        .addRating(this.data.filmId, this.rating)
        .subscribe(data => {});
    }

    this.filmsService
      .getTotalRating(this.data.filmId)
      .subscribe((data: number) => {
        this.rating = data;
      });

    this.dialogRef.close(this.rating);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
