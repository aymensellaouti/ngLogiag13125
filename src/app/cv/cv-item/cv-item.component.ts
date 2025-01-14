import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv-item',
  standalone: true,
  imports: [],
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
