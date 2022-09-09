import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ActivateLoginGuard implements CanActivate {
  public constructor(private readonly _router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const loggedIn: boolean = !!JSON.parse(
      localStorage.getItem("USER") as string
    );

    if (loggedIn) {
      this._router.navigateByUrl("/board");
      return false;
    } else return true;
  }
}
