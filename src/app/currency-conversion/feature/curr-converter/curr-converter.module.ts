import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrConverterRoutingModule } from './curr-converter-routing.module';
import { CurrConverterComponent } from './curr-converter.component';


@NgModule({
  declarations: [
    CurrConverterComponent
  ],
  imports: [
    CommonModule,
    CurrConverterRoutingModule
  ]
})
export class CurrConverterModule { }
