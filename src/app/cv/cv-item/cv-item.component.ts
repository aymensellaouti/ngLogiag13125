import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
  selector: 'app-cv-item',
  standalone: true,
  imports: [DefaultImagePipe],
  templateUrl: './cv-item.component.html',
  styleUrl: './cv-item.component.css',
})
export class CvItemComponent {
  cv = input.required<Cv>();
  selectCv = output<Cv>();
  onSelectCv() {
    this.selectCv.emit(this.cv());
  }
}
