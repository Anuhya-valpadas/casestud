import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  //transform(value:number) {
   // console.log('pipe invoked')
   // return '80% off';
 // }
  transform(value:number,value1:number) {
    console.log('pipe invoked')
    return ((value-value1)/value)*100 + '%off';
  }
}
