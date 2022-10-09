import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrConverterComponent } from './curr-converter.component';

const routes: Routes = [
  {
    path: '', component: CurrConverterComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrConverterRoutingModule { }
