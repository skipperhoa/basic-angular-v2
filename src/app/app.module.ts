import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import {UploadComponent} from './pages/upload.component';
const appRoutes: Routes = [
    { path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
   { path: 'home',  redirectTo: '/',pathMatch:"full" },
   {path:'upload-image',component:UploadComponent}
];
@NgModule({
  imports:      [ BrowserModule,FormsModule,RouterModule.forRoot(appRoutes,{ enableTracing: true })],
  declarations: [ AppComponent ,UploadComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
