import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  @Input() defaultColor: string = 'antiquewhite';
  @Input() hoverColor: string = 'gainsboro';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'gainsboro');
    this.backgroundColor = this.defaultColor
  }

  @HostListener ('mouseenter') mouseover (eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'gainsboro');
    this.backgroundColor = this.hoverColor;
  }

  @HostListener ('mouseleave') mouseleave (eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'antiquewhite');
    this.backgroundColor = this.defaultColor;
  }

}
