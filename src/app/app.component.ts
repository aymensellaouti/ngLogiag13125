import { Component } from '@angular/core';

import { TtcComponent } from './signals/ttc/ttc.component';
import { RotatingCardComponent } from "./components/rotating-card/rotating-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RotatingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngLogiag13125';
}
