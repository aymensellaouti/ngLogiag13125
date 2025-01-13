import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class ColorComponent {
  /**
   * L'attribut qui définit la couleur par défaut de la div
   */
  defaultColor = 'red';
  /**
   * L'attribut qui définit la couleur de la div
   */
  color = signal(this.defaultColor);

  /**
   * Change la couleur de l'input puis reset l'input
   * @param newColorInput : HTMLInpuElement
   */
  changeColor(newColorInput: HTMLInputElement) {
    this.color.set(newColorInput.value);
    newColorInput.value = '';
  }

  /**
   * Réinitialiser la couelur de la div
   */
  reset() {
    this.color.set(this.defaultColor);
  }
}
