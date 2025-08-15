import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColofulBg]',
  standalone: false,
})
export class ColofulBg {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
