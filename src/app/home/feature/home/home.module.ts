import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../../../shared/ui/navbar/navbar.module';
import { FootbarModule } from '../../../shared/ui/footbar/footbar.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    FootbarModule
  ]
})
export class HomeModule { }
