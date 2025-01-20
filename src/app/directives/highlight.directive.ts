import { Directive, HostBinding, HostListener, input, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  out = input('red');
  in = input('yellow');
  @HostBinding('style.backgroundColor') bgc = this.out();
  @HostBinding('style.color') color = 'lightblue';
  constructor() {
    console.log('highlight');
  }
  ngOnInit(): void {
    this.bgc = this.out();;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out();
  }
}
