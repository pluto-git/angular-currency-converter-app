import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrConverterRoutingModule } from './curr-converter-routing.module';
import { CurrConverterComponent } from './curr-converter.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrConverterComponent
  ],
  imports: [
    CommonModule,
    CurrConverterRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule
  ]
})
export class CurrConverterModule { }
