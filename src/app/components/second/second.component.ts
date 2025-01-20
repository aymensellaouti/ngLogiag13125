import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  template: `
    <p>Je suis le second component</p>
  `,
  styles: ``
})
export class SecondComponent {
  acr = inject(ActivatedRoute)
}
