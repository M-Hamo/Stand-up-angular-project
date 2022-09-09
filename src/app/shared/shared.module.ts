import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { LazyLoadImageModule } from "ng-lazyload-image";
import { MaterialModule } from "./material.module";

import { ButtonBarComponent } from "./components/button-action/button-bar/button-bar.component";
import { ButtonComponent } from "./components/button-action/button/button.component";
import { ShimmerLoadingComponent } from "./components/shimmer-loading/shimmer-loading.component";
import { NoDataComponent } from "./components/no-data/no-data.component";
import { AppImageComponent } from "./components/elements/app-img/app-img.component";
import { UserComponent } from "./components/user/user.component";

const UI_COMPONENTS = [
  AppImageComponent,
  ButtonComponent,
  ShimmerLoadingComponent,
  ButtonBarComponent,
  NoDataComponent,
  UserComponent,
];

const THIRD_MODULES = [MaterialModule, LazyLoadImageModule];

const COMMON_MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  HttpClientModule,
];

@NgModule({
  declarations: [...UI_COMPONENTS],
  imports: [...COMMON_MODULES, ...THIRD_MODULES],
  exports: [...COMMON_MODULES, ...THIRD_MODULES, ...UI_COMPONENTS],
})
export class SharedModule {}
