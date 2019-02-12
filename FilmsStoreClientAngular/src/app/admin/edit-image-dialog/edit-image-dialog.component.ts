import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AdminService } from "../../services/admin.service";
import { ImagesService } from "../../services/images.service";
import { Image } from "../../models/image";

export interface DialogData {
  image: Image;
}

@Component({
  selector: "admin-edit-image-dialog.",
  templateUrl: "./edit-image-dialog.component.html",
  styleUrls: ["./edit-image-dialog.component.scss"]
})
export class EditImageDialogComponent {
  image: Image;

  constructor(
    private dialogRef: MatDialogRef<EditImageDialogComponent>,
    private adminService: AdminService,
    private imagesService: ImagesService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    dialogRef.disableClose = true;
    this.image = new Image(data.image);
  }

  save(): void {
    this.adminService.addImage(this.image).subscribe(data => {
      if (this.image.imageId === 0) {
        this.imagesService
          .getImages(this.image.filmId)
          .subscribe((images: Image[]) => {
            this.dialogRef.close(images);
          });
      } else {
        this.data.image.url = this.image.url;
        this.dialogRef.close();
      }
    });
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
