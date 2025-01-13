import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-somme',
  standalone: true,
  imports: [],
  templateUrl: './somme.component.html',
  styleUrl: './somme.component.css',
})
export class SommeComponent {
  counter = signal({
    value: 0,
  });
  x = signal(5);
  y = signal(4);
  z = computed(() => this.x() + this.y());
  doubleZ = computed(() => {
    console.log('in doubleZ');

    return this.z() * 2;
  });
  tripleZ = computed(() => {
    console.log('in tripleZ');

    return this.z() * 2;
  });
  doubleCounter = computed(() => this.counter().value * 2);
  increment(mySignal: WritableSignal<number>) {
    mySignal.update((value) => value + 1);
  }
  incrementCounter() {
    this.counter.update((actuelCounter) => ({
      ...this.counter(),
      value: this.counter().value + 1,
    }));
  }
}
