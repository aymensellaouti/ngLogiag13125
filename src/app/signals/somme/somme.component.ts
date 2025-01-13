import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-somme',
  standalone: true,
  imports: [],
  templateUrl: './somme.component.html',
  styleUrl: './somme.component.css',
})
export class SommeComponent {
  x = signal(5);
  y = signal(4);
  z = computed(() => this.x() + this.y());
  doubleZ = computed(() => this.z() * 2);
  increment(mySignal: WritableSignal<number>) {
    mySignal.update( value => value + 1);
  }
}
