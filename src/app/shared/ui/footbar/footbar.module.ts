import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootbarComponent } from './footbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { LoaderService } from '../../data-access/loader.service';

@NgModule({
  declarations: [
    FootbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports:[
    FootbarComponent
  ],
  providers:[LoaderService]
})
export class FootbarModule { }
