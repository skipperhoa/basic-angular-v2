import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/upload-image" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Upload Images'; }
