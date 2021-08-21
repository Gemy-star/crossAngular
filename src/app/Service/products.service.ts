import {Injectable} from '@angular/core';
import {Product, ProductType} from "../Domain/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Products:Product[] = [];
  constructor() {
    this.Products = [{
      Id:1 ,
      Name:"Black T-shirt" ,
      Amount:3 ,
      Description:"Nice T-shirt",
      ProductType: ProductType.Basic
    },
      {
        Id:2 ,
        Name:"Navy T-shirt" ,
        Amount:3 ,
        Description:"Nice T-shirt",
        ProductType: ProductType.Premium
      },
      {
        Id:1 ,
        Name:"Grey T-shirt" ,
        Amount:3 ,
        Description:"Nice T-shirt",
        ProductType: ProductType.Basic
      },]

  }

  getProducts () {
    return this.Products;
  }
  addProduct (Product : Product) {
    this.Products.push(Product);
  }

  RemoveProduct (Product : Product) {
    this.Products =  this.Products.filter(x => x.Id == Product.Id);
  }
  getProductById(id:number){
    return this.Products.find(x => x.Id == id);
  }
}
