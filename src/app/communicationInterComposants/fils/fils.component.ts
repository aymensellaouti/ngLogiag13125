import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  standalone: true,
  imports: [],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css',
})
export class FilsComponent {
  //fils(message = 'cc') {console.log(message);}
  // @Input()
  messageExterne = input("je n'ai encore reçu aucun message");
  /**
   * Todo: 1 création de l'event
   *       2 déclencher l'event avec la data à l'intérieur
   */

  // @Output()
  // messageToDad = new EventEmitter<string>();
  messageToDad = output<string>();
  onMessageToDad() {
    this.messageToDad.emit(
      'salut papa tu peux me chercher des sucreries stp ?'
    );
  }
}
