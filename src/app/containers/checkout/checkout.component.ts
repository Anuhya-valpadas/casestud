import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
checkoutFrom:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(4),]),
  email:new FormControl('test@mail.com',{updateOn:'change',validators:[Validators.required],}),
  address:new FormArray([]),},
  {updateOn:'change'});

  get addressObj(){
    return this.checkoutFrom.get('address') as FormArray;
  }
newAddress(){
  return new FormGroup({
  city:new FormControl(),
  pincode:new FormControl(null,[this.zipcodeValidator()]),
});
}
addAddress(){
this.addressObj.push(this.newAddress());
}
removeAddress(index:number){
this.addressObj.removeAt(index);
}

zipcodeValidator(){
  return (control:AbstractControl)=>{
    if(control.value==123456){
      return null;
    }
    return{
      zipcode:{
        validCode:123456,
        enteredCode:control.value,
      },
    };
  };
}

saveData(){
  if(this.checkoutFrom.valid){
    console.log('form submission logic',this.checkoutFrom)
  }
}
loadData(){
  const data={
    name:'hello',
    email:'hello@mail.com',
    address:{
      city:'city',
      pincode:123456,
    },
    };
    this.checkoutFrom.setValue(data);
  }
  patchData(){
    const data={name:'anuhya',email:'mike@mail.com'};
    this.checkoutFrom.patchValue(data);
  }
}

