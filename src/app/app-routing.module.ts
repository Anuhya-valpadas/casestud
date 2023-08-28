import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { ErrorPageComponent } from './containers/error-page/error-page.component';



const routes:Routes=[
  {path:'',component:DemoComponent},
  {path:'products',component:ProductListComponent},
  {path:'checkout',component:CheckoutComponent},
  //404:page
  {path:'**',component:ErrorPageComponent},
];
@NgModule({
  //declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[
    RouterModule,
  ],
})
export class AppRoutingModule { }
