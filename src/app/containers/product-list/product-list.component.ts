import { Component, DestroyRef, Input, OnChanges, OnInit, inject } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService],
})
export class ProductListComponent implements OnInit {
code!:string;
plist:ProductType []=[];
currency$!:Subscription;
destroyRef=inject(DestroyRef);
curr$:Observable<string>;
product$:Observable<ProductType[]>;

constructor(private productService:ProductService,
  private currencyService:CurrencyService,
  private router:Router
  ){
    this.curr$=this.currencyService.currencyObservable;
    this.product$=this.productService.getProducts();
  }
  addItem(data:any)
{
  console.log('add item to cart',data);
  this.router.navigateByUrl('/cart');
}
  ngOnInit():void{
    this.getData();
    //this.currencyService.currencyObservable.subscribe(
      //(code)=>(this.code=code)
   // )
   this.currencyService.currencyObservable.pipe(takeUntilDestroyed(this.destroyRef)).
   subscribe((code)=>(this.code=code));
  }
  ngOnDestroy():void
  {
}

getData(){
  this.productService.getProducts().subscribe(
    (data)=>{
      console.log('success',data);
      this.plist=data;
    },
    (err)=>{
      console.log('error',err);
    });   
}

updateprice()
{
  
}
detectChangeDetection(){
  console.log('product price change detected')
}

}

