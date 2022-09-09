import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter, ReplaySubject } from "rxjs";
import { AppSplashScreenService } from "./core/services/splash-screen.service";
import { takeUntil } from "rxjs/operators";
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: "app-root",
  template: `<ng-progress></ng-progress> <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit, OnDestroy {
  public constructor(
    private readonly _router: Router,
    private readonly _splashScreen: AppSplashScreenService,
    private readonly _iconRegistry: MatIconRegistry
  ) {
    this._iconRegistry.setDefaultFontSetClass("material-icons-outlined");
  }

  public readonly _destroyAll$ = new ReplaySubject<unknown>(1);

  public ngOnInit(): void {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this._destroyAll$)
      )
      .subscribe(() => this._splashScreen.hide());
  }

  public ngOnDestroy(): void {
    this._destroyAll$.next(undefined);
    this._destroyAll$.complete();
  }
}
