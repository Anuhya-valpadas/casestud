import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
codes=['INR','USD','GBP','EUR'];
@Output() CurrencySelected=new EventEmitter();

getSelectedCode(event:Event){
  const ele=event.target as HTMLSelectElement;
  this.CurrencySelected.emit(ele.value);
}
}
