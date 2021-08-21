import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule)},
  {path:'products' , loadChildren: () => import('./Modules/products/products.module').then(m => m.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
