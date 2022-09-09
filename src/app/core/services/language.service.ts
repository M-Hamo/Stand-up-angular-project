import { Injectable } from "@angular/core";
import { BidirectionallyService } from "./bidirectionally.service";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  public constructor(
    public readonly bidirectionallyService: BidirectionallyService
  ) // private readonly translocoService: TranslocoService
  {
    this.bidirectionallyService.setDirection("rtl");
    // this.setLanguage(JSON.parse(localStorage.getItem("lang") as string));
  }

  // public setLanguage(language: string, onInit = true): void {
  //   const lang: string = language ?? this._getDefaultLang;
  //   if (lang) {
  //     localStorage.setItem("lang", JSON.stringify(lang));
  //     this.translocoService.setActiveLang(lang);
  //     this.bidirectionallyService.setDirection(lang === "en" ? "ltr" : "rtl", onInit);
  //   }
  // }

  // public get getLanguage(): string {
  //   return JSON.parse(localStorage.getItem("lang") as string);
  // }

  // /**
  //  * @description Return the default browser language
  //  */
  // private get _getDefaultLang(): string | undefined {
  //   return getBrowserLang();
  // }
}
