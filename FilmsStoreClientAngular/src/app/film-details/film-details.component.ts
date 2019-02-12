import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { FilmsService } from "../services/films.service";
import { ImagesService } from "../services/images.service";
import { RatingService } from "../services/rating.service";
import { SessionService } from "../services/session.service";
import { Film } from "../models/film";
import { Image } from "../models/image";
import { StarsRatingComponent } from "../stars-rating/stars-rating.component";
import { NgxGalleryOptions, NgxGalleryImage } from "ngx-gallery";

@Component({
  selector: "app-film-details",
  templateUrl: "./film-details.component.html",
  styleUrls: ["./film-details.component.scss"]
})
export class FilmDetailsComponent implements OnInit {
  film: Film;
  isUserRated: boolean = false;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  constructor(
    public dialog: MatDialog,
    private filmsService: FilmsService,
    private imagesService: ImagesService,
    private ratingService: RatingService,
    private sessionService: SessionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get("id");
    this.filmsService.getFilmDetails(id).subscribe((data: Film) => {
      this.film = data;
    });

    this.imagesService.getImages(id).subscribe((data: Image[]) => {
      data.forEach(item =>
        this.galleryImages.push({
          small: item.url,
          medium: item.url,
          big: item.url
        })
      );
    });

    if (!!this.sessionService.getItem("userName")) {
      this.ratingService.checkRating(id).subscribe((data: boolean) => {
        this.isUserRated = data;
      });
    }

    this.galleryOptions = [
      { image: false, height: "150px", width: "100%" },
      { breakpoint: 500, width: "100%" }
    ];
  }

  get getIsUserRated(): boolean {
    return !!this.sessionService.getItem("userName") && this.isUserRated;
  }

  rate(): void {
    if (this.sessionService.getItem("userName")) {
      const dialogRef = this.dialog.open(StarsRatingComponent, {
        width: "280px",
        data: {
          filmId: this.film.filmId
        }
      });

      dialogRef;
      dialogRef.afterClosed().subscribe(data => {
        if (data !== 0) {
          this.film.rating = data;
          this.isUserRated = true;
        }
      });
    } else {
      this.router.navigateByUrl("/login");
    }
  }
}
