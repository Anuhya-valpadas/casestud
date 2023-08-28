import { Component, EventEmitter, Output } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
codes=['INR','USD','GBP','EUR'];
//@Output() CurrencySelected=new EventEmitter();
constructor(private currencyService:CurrencyService){}
ngOnInit():void{
  if(localStorage.getItem('codes')){
    this.codes=JSON.parse(localStorage.getItem('codes') as string)
  }
  else{
  this.getData();
}
}
getData(){
  this.currencyService.getForexData().subscribe(
    (data)=>{
      console.log('success',data);
      this.codes=data.codes;
      localStorage.setItem('codes',JSON.stringify(this.codes));
      localStorage.setItem('rates',JSON.stringify(data.rates));
    },
    (err)=>{
      console.log('error',err);
    });   
}

getSelectedCode(event:Event){
  const ele=event.target as HTMLSelectElement;
//this.CurrencySelected.emit(ele.value);
this.currencyService.updateCurrency(ele.value);
}
}
