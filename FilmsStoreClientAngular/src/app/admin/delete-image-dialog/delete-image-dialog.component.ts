import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AdminService } from "../../services/admin.service";
import { ImagesService } from "../../services/images.service";
import { Image } from "../../models/image";

export interface DialogData {
  image: Image;
}

@Component({
  selector: "admin-delete-image-dialog",
  templateUrl: "delete-image-dialog.component.html",
  styleUrls: ["delete-image-dialog.component.scss"]
})
export class DeleteImageDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<DeleteImageDialogComponent>,
    private adminService: AdminService,
    private imagesService: ImagesService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    dialogRef.disableClose = true;
  }

  delete(): void {
    this.adminService.deleteImage(this.data.image.imageId).subscribe(data => {
      this.imagesService
        .getImages(this.data.image.filmId)
        .subscribe((images: Image[]) => {
          this.dialogRef.close(images);
        });
    });
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
