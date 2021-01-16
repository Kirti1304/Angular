import { Directive,HostListener,HostBinding, Output } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})

export class HighlighterDirective {

  constructor() { }

  colorApply:boolean = false

  @HostBinding('class.is-warning')
  get color(){
    return this.colorApply
  }

  @HostListener('mouseover')
  onMouseOver(){
    this.colorApply = true
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.colorApply = false
  }

}
