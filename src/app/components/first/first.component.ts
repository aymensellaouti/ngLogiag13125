import { Component } from '@angular/core';
import { SecondComponent } from "../second/second.component";
import { ViewEncapsulation } from '@angular/compiler';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [SecondComponent],
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
