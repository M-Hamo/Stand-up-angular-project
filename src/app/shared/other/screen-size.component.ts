import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "screen-size",
  template: "",
})
export class ScreenSizeComponent implements OnInit {
  @ViewChild("drawer") public drawer!: MatSidenav;

  public drawerMode!: string;

  private readonly _smallScreenSize: number = 769;

  public ngOnInit() {
    setTimeout(() => {
      this.drawerMode =
        window.screen?.width < this._smallScreenSize ? "over" : "side";
      console.log(window.screen?.width < this._smallScreenSize);
    });
  }

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
