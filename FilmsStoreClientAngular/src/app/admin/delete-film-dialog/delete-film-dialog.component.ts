import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AdminService } from "../../services/admin.service";

export interface DialogData {
  filmId: number;
  filmName: string;
}

@Component({
  selector: "admin-delete-film-dialog",
  templateUrl: "delete-film-dialog.component.html",
  styleUrls: ["delete-film-dialog.component.scss"]
})
export class DeleteFilmDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<DeleteFilmDialogComponent>,
    private adminService: AdminService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    dialogRef.disableClose = true;
  }

  delete(): void {
    this.adminService.deleteFilm(this.data.filmId).subscribe(data => {});
    this.dialogRef.close(this.data.filmId);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
