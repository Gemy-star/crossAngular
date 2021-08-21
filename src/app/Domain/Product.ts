export interface Product
{
  Id?:number,
  Name?:string,
  Description?:string,
  Amount?:number,
  ProductType?:ProductType
}

export enum ProductType {
  Basic = "Basic",
  Premium ="Premium"
}



