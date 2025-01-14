import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv';
import { CvItemComponent } from "../cv-item/cv-item.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cv-list',
  standalone: true,
  imports: [CvItemComponent, NgClass],
  templateUrl: './cv-list.component.html',
  styleUrl: './cv-list.component.css'
})
export class CvListComponent {
  cvs = input<Cv[]>([]);
  forwardCv = output<Cv>();
}
