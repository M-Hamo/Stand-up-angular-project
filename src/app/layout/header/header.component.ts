import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ButtonTypes } from "src/app/shared/utils/button-properties";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class LayoutHeaderComponent implements OnInit {
  public constructor() {}

  @Output() public toggleSide: EventEmitter<unknown> =
    new EventEmitter<unknown>();

  public readonly ButtonTypes = ButtonTypes;

  public ngOnInit(): void {}
}
