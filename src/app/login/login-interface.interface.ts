import { FormControl } from "@angular/forms";

export interface LoginFormGroup {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  rememberMe: FormControl<boolean | null>;
}
