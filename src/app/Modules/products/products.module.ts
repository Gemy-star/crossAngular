import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from "../../Components/products/products.component";
import {ProductsService} from "../../Service/products.service";
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService , MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';




@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    DialogModule,
    InputNumberModule,
    DropdownModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers:[
    ProductsService,
    MessageService,
    ConfirmationService

  ]
})
export class ProductsModule { }
