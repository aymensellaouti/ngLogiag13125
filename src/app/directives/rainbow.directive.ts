import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
  standalone: true
})
export class RainbowDirective {

  // Ce que je veux manipuler
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') borderColor = 'black';
  constructor() {
    console.log('Rainbow');

   }

  // quel comportement ajouter
  @HostListener('keyup') onKeyUp() {
    this.color = this.borderColor = this.getRandomColor();
  }
  private getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);;
  }
}
