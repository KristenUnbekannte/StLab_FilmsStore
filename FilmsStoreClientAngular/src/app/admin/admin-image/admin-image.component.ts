import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Image } from "../../models/image";
import { EditImageDialogComponent } from "../edit-image-dialog/edit-image-dialog.component";
import { DeleteImageDialogComponent } from "../delete-image-dialog/delete-image-dialog.component";

@Component({
  selector: "admin-image",
  templateUrl: "./admin-image.component.html",
  styleUrls: ["./admin-image.component.scss"]
})
export class AdminImageComponent {
  @Input() image: Image;
  @Output() setImages = new EventEmitter<Image[]>();

  constructor(public dialog: MatDialog) {}

  editImage(): void {
    this.dialog.open(EditImageDialogComponent, {
      width: "400px",
      data: {
        image: this.image
      }
    });
  }

  deleteImage(): void {
    const dialogRef = this.dialog.open(DeleteImageDialogComponent, {
      width: "400px",
      data: {
        image: this.image
      }
    });

    dialogRef;
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.setImages.emit(data);
      }
    });
  }
}
