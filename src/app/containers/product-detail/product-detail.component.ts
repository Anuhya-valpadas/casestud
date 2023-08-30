import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
constructor(private activeRoute:ActivatedRoute){}
ngOnInit() :void{
this.activeRoute.paramMap.subscribe((par)=>{
  console.log('PID',par.get('pid'));
});
}
}
