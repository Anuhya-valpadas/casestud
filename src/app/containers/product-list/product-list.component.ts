import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService],
})
export class ProductListComponent implements OnInit {
@Input({required:true}) code!:string;
plist:ProductType []=[];
constructor(private productService:ProductService){}
  ngOnInit():void{
    this.getData();
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
addItem(data:any)
{
  console.log('add item to cart',data);
}
updateprice()
{
  
}
detectChangeDetection(){
  console.log('product price change detected')
}

}

