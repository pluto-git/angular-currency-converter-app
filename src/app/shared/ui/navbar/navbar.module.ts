import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CurrencyCardModule } from '../currency-card/currency-card.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    RouterModule,
    CurrencyCardModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
