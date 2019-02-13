import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FilmDetailsComponent } from "./film-details/film-details.component";
import { FilmsListComponent } from "./films-list/films-list.component";
import { AdminFilmsListComponent } from "./admin/admin-films-list/admin-films-list.component";
import { AdminEditFilmComponent } from "./admin/admin-edit-film/admin-edit-film.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AuthRoute } from "./authRoute";

const routes: Routes = [
  { path: "", component: FilmsListComponent },
  { path: "film/:id", component: FilmDetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "admin",
    component: AdminFilmsListComponent,
    canActivate: [AuthRoute]
  },
  {
    path: "admin/film/:id",
    component: AdminEditFilmComponent,
    canActivate: [AuthRoute]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthRoute]
})
export class AppRoutingModule {}
