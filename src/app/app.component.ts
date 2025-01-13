import { Component } from '@angular/core';
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second/second.component";
import { ColorComponent } from "./components/color/color.component";
import { CounterComponent } from "./signals/counter/counter.component";
import { SommeComponent } from "./signals/somme/somme.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponent, SecondComponent, ColorComponent, CounterComponent, SommeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngLogiag13125';
}
