import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FilmsService } from "../../services/films.service";
import { ImagesService } from "../../services/images.service";
import { AdminService } from "../../services/admin.service";
import { Film } from "../../models/film";
import { Image } from "../../models/image";

@Component({
  selector: "admin-edit-film",
  templateUrl: "./admin-edit-film.component.html",
  styleUrls: ["./admin-edit-film.component.scss"]
})
export class AdminEditFilmComponent implements OnInit {
  images: Image[] = [];
  filmFormGroup: FormGroup;

  constructor(
    private filmsService: FilmsService,
    private imagesService: ImagesService,
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.filmFormGroup = this.formBuilder.group({
      filmId: [],
      name: ["", Validators.required],
      country: ["", Validators.required],
      year: ["", [Validators.required, Validators.pattern("[0-9]{4}")]],
      genre: ["", Validators.required],
      rating: ["", Validators.required],
      producer: ["", Validators.required],
      imageUrl: ["", Validators.required],
      videoUrl: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  get filmId(): number {
    return +this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    if (this.filmId !== 0) {
      this.filmsService.getFilmDetails(this.filmId).subscribe((data: Film) => {
        this.filmFormGroup.setValue(data);
      });

      this.imagesService.getImages(this.filmId).subscribe((data: Image[]) => {
        this.images = data;
      });
    } else {
      this.filmFormGroup.controls["filmId"].setValue(0);
      this.filmFormGroup.controls["rating"].setValue(0);
    }
  }

  save(): void {
    if (this.filmFormGroup.valid) {
      this.adminService.addFilm(this.filmFormGroup.value).subscribe(data => {});
      this.router.navigateByUrl("/admin");
    }
  }
}
