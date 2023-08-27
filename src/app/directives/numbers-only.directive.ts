import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[appNumbersOnly]'
})
export class NumbersOnlyDirective {
@Input() appNumbersOnly!:number|string;
  constructor() { }
  @HostListener('keypress',['$event'])
  restrictNumbersonly(event:KeyboardEvent){
    const inputTag=event.target as HTMLInputElement;
    const length=Number(this.appNumbersOnly);
    const txtLength=inputTag.value.length;
  if( txtLength>=length||event.keyCode<48||event.keyCode>57){
    event.preventDefault();
  }

}
}
