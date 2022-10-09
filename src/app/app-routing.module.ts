import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategyService } from './shared/data-access/custom-preloading-strategy.service';

//a bit of overkill for this small app.
//also no standalone components were used to show a bit of the legacy way
const routes: Routes = [{
  path: '', data: { preload: true },
  loadChildren: async () =>
    (await import('./home/feature/home/home.module')).HomeModule
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
