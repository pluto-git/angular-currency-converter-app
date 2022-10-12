import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';
import { FootbarModule } from '../footbar/footbar.module';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    FootbarModule,
    NavbarModule
  ],exports:[
    WrapperComponent
  ]
})
export class WrapperModule { }
