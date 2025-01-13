import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  two = signal('init value');

  changeTwo() {
    this.two.set('new value');
  }
}
