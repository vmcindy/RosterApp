import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicDirective]'
})
export class BasicDirective implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(){
    this.elRef.nativeElement.style.backgroundColor = 'bisque';
  }

}
