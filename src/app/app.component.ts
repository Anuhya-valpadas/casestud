import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currencyCode!:string;
  getSelectedCode(code:string){
 console.log("code changed",code);
 this.currencyCode=code;
  }
  count:string="5";
}
