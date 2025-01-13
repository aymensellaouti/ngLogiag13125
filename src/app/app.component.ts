import { Component } from '@angular/core';

import { TtcComponent } from './signals/ttc/ttc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TtcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngLogiag13125';
}
