import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {ProductsService} from "../../Service/products.service";
import {Product} from "../../Domain/Product";
import {FormControl, FormGroup,FormBuilder,  Validators} from "@angular/forms";
import { NameValidators } from './name.validator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'] ,
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  providers: [MessageService,ConfirmationService]

})
export class ProductsComponent implements OnInit {

  productDialog: boolean =false;

  products: Product[] =[];

  product: Product = {};
  productTypes:any[] =[];

  selectedProducts: Product[] =[];

  submitted: boolean =true;
  cols: any[] = [];
  form: FormGroup;


  constructor(fb: FormBuilder,private productService: ProductsService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.form = fb.group(   {
      Name : new FormControl(this.product.Name , Validators.required , NameValidators.NameUnique),
      Description:new FormControl(this.product.Description , Validators.required),
      Amount:new FormControl(this.product.Amount , Validators.required),
      ProductType:new FormControl(this.product.ProductType,Validators.required),

    });
  }


  ngOnInit(): void {
    this.products = this.productService.getProducts()
    this.cols = [
      { field: 'Name', header: 'الأسم' },
      { field: 'Description', header: 'الوصف' },
      { field: 'Amount', header: 'الكمية' },
      { field: 'ProductType', header: 'نوع المنتج' }
    ];
    this.productTypes = [
      {label: 'Basic', value: 'Basic'},
      {label: 'Premium', value: 'Premium'},
    ];

  }
 
  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }
  get Amount() { return this.form.controls.Amount; }
  get Name() { return this.form.controls.Name;  }
  get Description() { return this.form.controls.Description;  }
  get ProductType() { return this.form.controls.ProductType;  }

  editProduct(product: Product) {
    this.product = {...product};
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.Name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val.Id !== product.Id);
        this.productService.setProducts(this.products);
        this.product = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    // @ts-ignore
    if (this.product.Name.trim()) {
      if (this.product.Id) {
        this.productService.editProduct(this.product);
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      }
      else {
        this.product.Id = this.productService.createId();
        this.productService.addProduct(this.product)
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: number | undefined): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].Id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
