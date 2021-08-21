import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "../../Components/products/products.component";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'',component: ProductsComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
