import { NgStyle } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
  standalone: true,
  imports: [NgStyle, FormsModule]
})
export class MiniWordComponent {
  color = signal('#ff0000');
  fontFamily = signal('verdana');
  size = signal(75);
  fonts = signal([
    'garamond', 'arial', 'verdana'
  ])
  fontSize = computed(() => this.size() + 'px')
}
