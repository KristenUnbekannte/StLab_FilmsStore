import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StarRatingModule } from "angular-star-rating";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material";
import { SafePipe } from "./pipes/safePipe";
import { ValidatorComponent } from "./validator/validator.component";

import { SessionService } from "./services/session.service";
import { FilmsService } from "./services/films.service";
import { AdminService } from "./services/admin.service";
import { CommentsService } from "./services/comments.service";
import { RatingService } from "./services/rating.service";
import { AccountService } from "./services/account.service";
import { ImagesService } from "./services/images.service";

import { MenuComponent } from "./menu/menu.component";
import { FilmsListComponent } from "./films-list/films-list.component";
import { FilmComponent } from "./film/film.component";
import { FilmDetailsComponent } from "./film-details/film-details.component";
import { CommentsListComponent } from "./comments-list/comments-list.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { StarsRatingComponent } from "./stars-rating/stars-rating.component";

import { AdminFilmsListComponent } from "./admin/admin-films-list/admin-films-list.component";
import { AdminFilmComponent } from "./admin/admin-film/admin-film.component";
import { AdminEditFilmComponent } from "./admin/admin-edit-film/admin-edit-film.component";
import { AdminImagesListComponent } from "./admin/admin-images-list/admin-images-list.component";
import { AdminImageComponent } from "./admin/admin-image/admin-image.component";
import { DeleteFilmDialogComponent } from "./admin/delete-film-dialog/delete-film-dialog.component";
import { DeleteImageDialogComponent } from "./admin/delete-image-dialog/delete-image-dialog.component";
import { EditImageDialogComponent } from "./admin/edit-image-dialog/edit-image-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FilmsListComponent,
    FilmComponent,
    FilmDetailsComponent,
    CommentsListComponent,
    RegisterComponent,
    LoginComponent,
    ValidatorComponent,
    SafePipe,
    StarsRatingComponent,
    AdminFilmsListComponent,
    AdminFilmComponent,
    DeleteFilmDialogComponent,
    AdminEditFilmComponent,
    AdminImagesListComponent,
    AdminImageComponent,
    DeleteImageDialogComponent,
    EditImageDialogComponent
  ],
  entryComponents: [
    StarsRatingComponent,
    DeleteFilmDialogComponent,
    DeleteImageDialogComponent,
    EditImageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    StarRatingModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    SessionService,
    FilmsService,
    ImagesService,
    AdminService,
    CommentsService,
    RatingService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
