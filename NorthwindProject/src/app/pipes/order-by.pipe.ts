import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/product';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {


  transform(value: number[], params:string): number[] {
    return value;
  }

}
