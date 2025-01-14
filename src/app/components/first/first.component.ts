import { Component } from '@angular/core';
import { SecondComponent } from "../second/second.component";
import { ViewEncapsulation } from '@angular/compiler';
import { HighlightDirective } from '../../directives/highlight.directive';
import { RainbowDirective } from '../../directives/rainbow.directive';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [SecondComponent, HighlightDirective, RainbowDirective],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  name = 'aymen';
  isHidden = false;
  message = '';
  constructor() {
    // setInterval(() => {
    //   //this.name = 'Jihane';

    // }, 5000);
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
