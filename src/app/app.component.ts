import { Component } from '@angular/core';

import { TtcComponent } from './signals/ttc/ttc.component';
import { RotatingCardComponent } from "./components/rotating-card/rotating-card.component";
import { NamesComponent } from "./components/names/names.component";
import { PereComponent } from "./communicationInterComposants/pere/pere.component";
import { Cv } from './cv/model/cv';
import { CvItemComponent } from "./cv/cv-item/cv-item.component";
import { CvComponent } from "./cv/cv/cv.component";
import { NgStyleComponent } from "./directives/ng-style/ng-style.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CvItemComponent, CvComponent, NgStyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngLogiag13125';
}
