import { Component, input } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
  selector: 'app-cv-card',
  standalone: true,
  imports: [DefaultImagePipe],
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.css',
})
export class CvCardComponent {
  cv = input<Cv | null>(null);
}
