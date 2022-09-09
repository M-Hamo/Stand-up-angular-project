import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ButtonTypes } from "src/app/shared/utils/button-properties";
import { MENU } from "./models/menu";
import { MenuItem } from "./models/menu.model";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class LayoutSideNavComponent implements OnInit {
  public constructor() {}

  @Output() public onClose: EventEmitter<unknown> = new EventEmitter<unknown>();

  public readonly menu: MenuItem[] = MENU;

  public readonly ButtonTypes = ButtonTypes;

  public ngOnInit(): void {}
}
