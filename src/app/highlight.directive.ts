import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') color = 'red';
  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') addStyle() {
    // this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.backgroundColor = this.color;
  }
  @HostListener('mouseleave') removeStyle() {
    // this.element.nativeElement.style.color = null;
    this.element.nativeElement.style.backgroundColor = null;
  }
  // @HostListener('onclick') addColor() {
  //   this.element.nativeElement.style.color = 'red';
  // }

}
