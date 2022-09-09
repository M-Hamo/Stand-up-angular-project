import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgProgressModule } from "ngx-progressbar";
import { NgProgressHttpModule } from "ngx-progressbar/http";

import { SharedModule } from "./shared/shared.module";
@NgModule({
  declarations: [AppComponent, AppRoutingModule.Components],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    NgProgressModule.withConfig({
      color: "#2196f3",
      trickleSpeed: 999,
      spinner: false,
    }),
    NgProgressHttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
