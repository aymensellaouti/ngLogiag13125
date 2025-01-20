import { Component } from '@angular/core';
import { Cv } from '../model/cv';



@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
  standalone: true
})
export class EmbaucheComponent {
   public embauchees: Cv[] = [];
}
