import {Injectable} from '@angular/core';
import {Product, ProductType} from "../Domain/Product";

@Injectable({
  providedIn: 'any'
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
        Id:3 ,
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
  findIndexById(id: number | undefined): number {
    let index = -1;
    for (let i = 0; i < this.Products.length; i++) {
      if (this.Products[i].Id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
setProducts(products:Product[]) {
  this.Products = products;
}
  createId(): number {
     let id = this.Products.length + 2 ;
     return id;
  }
  RemoveProduct (Product : Product) {
    this.Products =  this.Products.filter(x => x.Id == Product.Id);
  }
  getProductById(id:number){
    return this.Products.find(x => x.Id == id);
  }
  editProduct(product : Product) {
    this.Products[this.findIndexById(product.Id)] = product;
  }
}
