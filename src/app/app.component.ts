import { Component } from '@angular/core';

import { TtcComponent } from './signals/ttc/ttc.component';
import { RotatingCardComponent } from "./components/rotating-card/rotating-card.component";
import { NamesComponent } from "./components/names/names.component";
import { PereComponent } from "./communicationInterComposants/pere/pere.component";
import { Cv } from './cv/model/cv';
import { CvItemComponent } from "./cv/cv-item/cv-item.component";
import { CvComponent } from "./cv/cv/cv.component";
import { NgStyleComponent } from "./directives/ng-style/ng-style.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { FirstComponent } from "./components/first/first.component";
import { TodoComponent } from "./todo/todo/todo.component";
import { WeekTodoComponent } from "./todo/week-todo/week-todo.component";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TestFormComponent } from "./forms/test-form/test-form.component";
import { TestObservableComponent } from "./rxjs/test-observable/test-observable.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TestFormComponent, TestObservableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngLogiag13125';
}
