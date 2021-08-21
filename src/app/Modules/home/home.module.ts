import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';

import { HomeRoutingModule } from './home-routing.module';
import {BackgroundComponent} from "../../Components/background/background.component";


@NgModule({
  declarations: [
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
  ]
})
export class HomeModule { }
