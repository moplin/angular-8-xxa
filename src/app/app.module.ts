import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import { AppComponent } from './app.component';
import { LoggerModule } from 'ngx-logger';
import { NgxLoggerLevel } from "ngx-logger";

import { NgxGraphModule } from '@swimlane/ngx-graph';

const BASE_MODULES = [
  BrowserModule, 
  FormsModule,
  SharedModule,
  LoggerModule.forRoot({
    serverLoggingUrl: 'https://moplin.free.beeceptor.com/logs',
    level: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.ERROR
  }),

   NgxGraphModule,
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
