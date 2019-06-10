import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WoobaLoobaComponent } from './components/wooba-looba/wooba-looba.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxGraphModule } from '@swimlane/ngx-graph';

@NgModule({
  imports: [
    CommonModule, 
    InputTextModule, 
    ButtonModule,
    FlexLayoutModule,
    NgxGraphModule,
  ],
  declarations: [
    WoobaLoobaComponent
  ],
  exports: [
    WoobaLoobaComponent

  ]
})
export class SharedModule { }