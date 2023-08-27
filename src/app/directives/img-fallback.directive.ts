import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'img'
})
export class ImgFallbackDirective {

  constructor() { }
  @HostListener('error',['$event'])
  switchToFallback(event:Event){
    const imgTag=event.target as HTMLImageElement;
    imgTag.src='https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg';
  }

}
