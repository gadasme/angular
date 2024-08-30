import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'signals', loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule) },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: '**', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
