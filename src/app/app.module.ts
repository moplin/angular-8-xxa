import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';

const BASE_MODULES = [
  BrowserModule, 
  FormsModule,
  SharedModule
];


@NgModule({
  imports: [
    ...BASE_MODULES
    ],
  declarations: [
    AppComponent
    ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
