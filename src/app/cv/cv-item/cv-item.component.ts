import { Component, inject, input, output } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { CvService } from '../services/cv.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-cv-item',
  standalone: true,
  imports: [DefaultImagePipe, NgStyle],
  templateUrl: './cv-item.component.html',
  styleUrl: './cv-item.component.css',
})
export class CvItemComponent {
  cv = input.required<Cv>();
  cvService = inject(CvService);
  size = input(50);
  // selectCv = output<Cv>();
  onSelectCv() {
    // this.selectCv.emit(this.cv());
    this.cvService.selectCv(this.cv());
  }
}
