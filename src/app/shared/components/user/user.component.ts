import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from "@angular/core";
import { BooleanInput } from "@angular/cdk/coercion";
import { Router } from "@angular/router";
@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: "user",
})
export class UserComponent {
  public constructor(private readonly _router: Router) {}

  public static ngAcceptInputType_showAvatar: BooleanInput;

  @Input() public showAvatar = true;

  @Input() public showTooltip = false;

  @Input() public wrapperClass?: string;

  public signOut(): void {
    localStorage.removeItem("USER");
    this._router.navigateByUrl("/");
  }
}
