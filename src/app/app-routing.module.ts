import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivateLoginGuard } from "./core/services/guards/activate-login.guard";
import { AuthGuard } from "./core/services/guards/auth.guard";
import { AppSplashScreenService } from "./core/services/splash-screen.service";

import { LayoutContainerComponent } from "./layout/container/container.component";
import { LayoutHeaderComponent } from "./layout/header/header.component";
import { LayoutSideNavComponent } from "./layout/side-nav/side-nav.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UnderWorkComponent } from "./under-work/under-work.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [ActivateLoginGuard],
    title: "Login",
  },
  {
    path: "board",
    component: LayoutContainerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "under-working",
        component: UnderWorkComponent,
        title: "Page not available for now",
      },
    ],
  },
  {
    path: "**",
    component: NotFoundComponent,
    title: "Not found page",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
  providers: [AppSplashScreenService],
})
export class AppRoutingModule {
  public static Components = [
    LayoutContainerComponent,
    LayoutHeaderComponent,
    LayoutSideNavComponent,
    NotFoundComponent,
    LoginComponent,
  ];
}
