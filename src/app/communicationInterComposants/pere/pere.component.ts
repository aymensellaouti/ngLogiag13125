import { Component } from '@angular/core';
import { FilsComponent } from "../fils/fils.component";

@Component({
  selector: 'app-pere',
  standalone: true,
  imports: [FilsComponent],
  templateUrl: './pere.component.html',
  styleUrl: './pere.component.css'
})
export class PereComponent {
processMessageFromDad(message: string) {
  alert("Mon fils m'a dit " + message);
}

}
