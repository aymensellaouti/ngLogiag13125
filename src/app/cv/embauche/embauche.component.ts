import { Component, inject, Signal } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { CvItemComponent } from "../cv-item/cv-item.component";



@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
  standalone: true,
  imports: [CvItemComponent]
})
export class EmbaucheComponent {
  private embaucheService = inject(EmbaucheService);
  public embauchees: Signal<Cv[]>  = this.embaucheService.getEmbauchees();
}
