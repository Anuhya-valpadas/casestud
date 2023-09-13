import { NgFor } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from 'src/types';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filteredString:string,propName:string):any{
    if(value.length===0||filteredString===""){
      
       return value;
    }
    
    // const resultArray=[];
    // for(const items of value){
    //   if(items[propName]===filteredString){
    //     resultArray.push(items);
    //   }
    // }
    return value.filter((item: ProductType) => item['productName'].includes(filteredString));;
  }

}
