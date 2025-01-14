import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-names',
  standalone: true,
  imports: [],
  templateUrl: './names.component.html',
  styleUrl: './names.component.css'
})
export class NamesComponent {
  names = signal<string[]>([
    'Primeau',
    'Boudraa',
    'Colpron',
    'Laliberte-Beaupre',
    'Charpentier',
    'Jobin',
    'Hmami',
    'Cote',
    'Sellaouti'
  ])

  emptyNames() {
    this.names.set([]);
  }

}
