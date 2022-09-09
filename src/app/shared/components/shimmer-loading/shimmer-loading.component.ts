import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
  selector: "shimmer-loading",
  template: `
    <div class="p-6 shimmer-loading">
      <div class="comment animate" *ngFor="let load of loadings"></div>
    </div>
  `,
  styleUrls: ["./shimmer-loading.component.scss"],
})
export class ShimmerLoadingComponent implements OnInit {
  @HostBinding("class") public shimmer = "w-full";

  @Input() public set loadingsCount(val: number) {
    this._pushLoading(val);
  }

  public ngOnInit = (): void => {
    this.loadings?.length <= 0 && this._pushLoading(10);
  };

  public readonly loadings: number[] = [];

  private _pushLoading = (count: number): void => {
    for (let i = 0; i < count; i++) {
      this.loadings.push(i);
    }
  };
}
