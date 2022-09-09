import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "no-data",
  template: `
    <div
      class="h-100 w-100 d-flex flex-column justify-content-center align-items-center p-5"
    >
      <h3>{{ text ?? "noData" }}</h3>
      <ng-container *ngIf="showBtn">
        <button
          *ngIf="routerLink; else btn"
          type="button"
          [routerLink]="['/products/create-product']"
          class="btn btn-primary w-md"
        >
          <i class="mdi mdi-plus"></i>
          {{ btnText ?? "Add new" | translate }}
        </button>
        <ng-template #btn>
          <button
            type="button"
            class="btn btn-primary w-md"
            (click)="clicked.emit()"
          >
            <i class="mdi mdi-plus"></i>
            {{ btnText ?? "Add new" | translate }}
          </button>
        </ng-template>
      </ng-container>
    </div>
  `,
})
export class NoDataComponent {
  @Input() public text?: string;

  @Input() public routerLink?: string;

  @Input() public showBtn = false;

  @Input() public btnText?: string;

  @Output() public clicked = new EventEmitter<unknown>();
}
