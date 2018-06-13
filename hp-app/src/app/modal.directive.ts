import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'red';
    }
}
