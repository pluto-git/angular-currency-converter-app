import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: '/currency-conversion', pathMatch: 'full' },
      {
        path: 'currency-conversion', loadChildren: async () =>
          (await import('../../../currency-conversion/feature/curr-converter/curr-converter.module')).CurrConverterModule
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
