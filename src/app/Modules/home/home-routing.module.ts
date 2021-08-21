import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackgroundComponent} from "../../Components/background/background.component";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'',component: BackgroundComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
