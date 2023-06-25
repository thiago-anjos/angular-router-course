import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  UrlSerializer,
} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LicenseComponent } from "./licensePlate/license/license.component";
import { CanLoadAuthGuard } from "./services/can-load-auth.guard";
import { CustomPrealoadingStrategy } from "./services/custom-preloading.strategy";
import { ChatComponent } from "./chat/chat.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full",
  },
  {
    path: "courses",
    loadChildren: () =>
      import("./courses/courses.module").then((m) => m.CoursesModule),
    canLoad: [CanLoadAuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "license",
    component: LicenseComponent,
  },
  {
    path: "helpdesk-chat",
    component: ChatComponent,
    outlet: "chat",
  },
  {
    component: PageNotFoundComponent,
    path: "**",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      useHash: true,
      scrollPositionRestoration: "top",
    }),
  ],
  exports: [RouterModule],
  providers: [CanLoadAuthGuard, CustomPrealoadingStrategy],
})
export class AppRoutingModule {}
