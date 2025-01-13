import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [],
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
  color = this.defaultColor;

  /**
   * Change la couleur de la div puis reset l'input
   * @param newColorInput : HTMLInpuElement
   */
  changeColor(newColorInput: HTMLInputElement) {
    this.color = newColorInput.value;
    newColorInput.value = '';
  }

  /**
   * Réinitialiser la couelur de la div
   */
  reset() {
    this.color = this.defaultColor;
  }
}
