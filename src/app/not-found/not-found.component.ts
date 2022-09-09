import { Component, OnInit } from "@angular/core";
import { ButtonTypes, ButtonColors } from "../shared/utils/button-properties";

@Component({
  selector: "not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"],
})
export class NotFoundComponent implements OnInit {
  public constructor() {}

  public readonly ButtonTypes = ButtonTypes;

  public readonly ButtonColors = ButtonColors;

  public ngOnInit(): void {}
}
