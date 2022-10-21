import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { filter } from 'rxjs';

@Directive({
  selector: '[pbDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  constructor(
    private el: ElementRef,
    private render: Renderer2
    ) {}

  @HostListener('mouseover')
  darkenOn(){
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(80%)');
  }

  @HostListener('mouseleave')
  darkenOff(){
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
