import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import {CkeditorComponent} from './pages/ckeditor.component';

@NgModule({
  imports:      [ BrowserModule ,CKEditorModule,FormsModule],
  declarations: [ AppComponent,CkeditorComponent ],
  bootstrap:    [ CkeditorComponent ]
})
export class AppModule { }
