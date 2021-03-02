import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[InputFormat]'
})
export class InputFormatDirective {

  @Input('format') format;
  constructor(private ref: ElementRef) { }

  @HostListener('focus') onFocus(){
    console.log('focus');
  }

 @HostListener('blur') onBlur(){
  // console.log('blur');
  // let getValue : string= this.ref.nativeElement.value;
  // this.ref.nativeElement.value= getValue.toUpperCase();

  let getValue : string = this.ref.nativeElement.value;
  if(this.format === "toUpperCase")
  {
    this.ref.nativeElement.value= getValue.toUpperCase();
  } else if(this.format === "toUpperCase")
  {
    this.ref.nativeElement.value= getValue.toLowerCase();
  }
  else
  {
    this.ref.nativeElement.value= getValue.toUpperCase();
  }

  }
}
