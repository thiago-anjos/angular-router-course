import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  UrlSerializer,
} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { CoursesModule } from "./courses/courses.module";

const routes: Routes = [
  {
    path: "courses",
    loadChildren: () =>
      import("./courses/courses.module").then((m) => m.CoursesModule),
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
