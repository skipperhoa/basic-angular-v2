import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `<ckeditor
  [(ngModel)]="ckeditorContent"
    [config]="{uiColor: '#99000'}"
    [readonly]="false"
    (change)="onChange($event)"
    (ready)="onReady($event)"
    (focus)="onFocus($event)"
    (blur)="onBlur($event)"
    debounce="500">
  </ckeditor>`
})
export class CkeditorComponent {
    public ckeditorContent: any;
    constructor() {
        this.ckeditorContent = "<p>Ckeditor hmtl</p>";
    }
}