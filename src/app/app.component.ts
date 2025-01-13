import { Component } from '@angular/core';
import { TwoComponent } from "./components/two/two.component";
import { ColorComponent } from "./components/color/color.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TwoComponent, ColorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngLogiag13125';
}
