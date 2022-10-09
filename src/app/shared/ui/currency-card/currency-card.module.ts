import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyCardComponent } from './currency-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    CurrencyCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule
  ],
  exports:[CurrencyCardComponent]
})
export class CurrencyCardModule { }
