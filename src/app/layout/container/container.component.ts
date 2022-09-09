import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.scss"],
})
export class LayoutContainerComponent implements OnInit {
  public constructor() {
    this._onOpenFirst();
  }

  @ViewChild("drawer") public drawer!: MatSidenav;

  public drawerMode: string = "side";

  public drawerOpened: boolean = true;

  private readonly _smallScreenSize: number = 769;

  public ngOnInit(): void {}

  private _onOpenFirst = (): void => {
    if (window.screen?.width < this._smallScreenSize) {
      this.drawerMode = "over";
      this.drawerOpened = false;
    } else {
      this.drawerMode = "side";
      this.drawerOpened = true;
    }
  };

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    if (+event.target.innerWidth < this._smallScreenSize) {
      this.drawer.close();
      this.drawerMode = "over";
    } else {
      this.drawer.open();
      this.drawerMode = "side";
    }
  }
}
