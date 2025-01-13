import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = signal(0);

  increment1() {
    this.counter.update(oldValue => oldValue + 1);
  }
  increment2() {
    this.counter.set(this.counter() + 1);
  }
}
