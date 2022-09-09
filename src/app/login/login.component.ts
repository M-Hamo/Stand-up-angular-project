import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ButtonTypes, ButtonColors } from "../shared/utils/button-properties";
import { LoginFormGroup } from "./login-interface.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public constructor(
    private readonly _router: Router,
    private readonly _fb: FormBuilder
  ) {}

  public loginForm: FormGroup<LoginFormGroup> = this._fb.group({
    email: new FormControl<string | null>(null, {
      nonNullable: true,
      validators: Validators.required,
    }),
    password: new FormControl<string | null>(null, {
      nonNullable: true,
      validators: Validators.required,
    }),
    rememberMe: new FormControl<boolean | null>(null, { nonNullable: false }),
  });

  public readonly ButtonTypes = ButtonTypes;

  public readonly ButtonColors = ButtonColors;

  public loginSubmit = false;

  public ngOnInit(): void {}

  public onSubmit(): void {
    this.loginSubmit = true;
    localStorage.setItem("USER", JSON.stringify(this.loginForm.value));
    setTimeout(() => {
      this.loginSubmit = false;
      this._router.navigateByUrl("/board");
    }, 700);
  }
}
