import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective implements OnInit {

  @Input() defaultColor = 'black';
  @Input() hoverColor = 'red';

  // HOST BINDING IS THE EASIER ALTERNATIVE FOR ACCESSING DOM ELEMENT
  // UNLIKE RENDERER2, HOSTBINDING IS MUCH SIMPLER
  @HostBinding('style.color') textColor: string;

  constructor(
    private eleRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.textColor = this.defaultColor;
    // NOT GOOD IDEA TO ACCESS AN ELEMENT LIKE THIS, USE RENDERED2
    // this.eleRef.nativeElement.style.background = 'red';

    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'red');
  }

  // @HostListener('mouseenter') mouseover(eventData: Event) {
  //   // this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'red');
  //   this.textColor = this.hoverColor;
  // }

  // @HostListener('mouseleave') mouseout(eventData: Event) {
  //   // this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'black');
  //   this.textColor = this.defaultColor;
  // }

  @HostListener('click') mouseClick(eventData: Event) {
    this.textColor = this.hoverColor;
  }
}
