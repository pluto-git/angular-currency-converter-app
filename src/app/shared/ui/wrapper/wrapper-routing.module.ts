import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper.component';

const routes: Routes = [
  {
    path: '', component: WrapperComponent, children: [
      { path: '', redirectTo: '/currency-conversion', pathMatch: 'full' },
      {
        path: 'currency-conversion', loadChildren: async () =>
          (await (await import('../../../currency-conversion/feature/curr-converter/curr-converter.module')).CurrConverterModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WrapperRoutingModule { }
