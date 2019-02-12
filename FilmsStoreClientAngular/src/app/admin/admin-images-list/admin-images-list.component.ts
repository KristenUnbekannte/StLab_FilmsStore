import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ImagesService } from "../../services/images.service";
import { Image } from "../../models/image";
import { EditImageDialogComponent } from "../edit-image-dialog/edit-image-dialog.component";

@Component({
  selector: "admin-images-list",
  templateUrl: "./admin-images-list.component.html",
  styleUrls: ["./admin-images-list.component.scss"]
})
export class AdminImagesListComponent implements OnInit {
  @Input() filmId: number;
  images: Image[] = [];

  constructor(private imagesService: ImagesService, public dialog: MatDialog) {}

  ngOnInit() {
    this.imagesService.getImages(this.filmId).subscribe((data: Image[]) => {
      this.images = data;
    });
  }

  addImage(): void {
    const dialogRef = this.dialog.open(EditImageDialogComponent, {
      width: "400px",
      data: {
        image: new Image({ imageId: 0, filmId: this.filmId, url: "" })
      }
    });

    dialogRef;
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.images = data;
      }
    });
  }

  setImages(event: Image[]): void {
    this.images = event;
  }
}
