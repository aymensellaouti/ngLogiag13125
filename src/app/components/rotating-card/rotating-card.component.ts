import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rotating-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rotating-card.component.html',
  styleUrl: './rotating-card.component.css',
})
export class RotatingCardComponent {
  firstname = signal('aymen');
  name = signal('sellaouti');
  job = signal('Consultant');
  path = signal('rotating_card_profile.png');
}
