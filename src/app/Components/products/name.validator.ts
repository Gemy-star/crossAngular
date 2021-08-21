import {AbstractControl, ValidationErrors} from "@angular/forms";
import { ProductsService } from "src/app/Service/products.service";



export class NameValidators {
    static NameUnique(control : AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise ((resolve , reject) => {
                   setTimeout(() => {
                      let pro  = new ProductsService().getProducts().find(x=> x.Name == control.value);
                      if (pro == null) {
                        resolve(null)
                      }else {
                        return resolve({NameUnique:true});
                         
                      }
                   },1000)
        });
    } 
}