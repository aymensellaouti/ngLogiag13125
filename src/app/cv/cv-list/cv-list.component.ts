import { Component, input } from '@angular/core';
import { Cv } from '../model/cv';
import { CvItemComponent } from "../cv-item/cv-item.component";

@Component({
  selector: 'app-cv-list',
  standalone: true,
  imports: [CvItemComponent],
  templateUrl: './cv-list.component.html',
  styleUrl: './cv-list.component.css'
})
export class CvListComponent {
  cvs = input<Cv[]>([]);
}
