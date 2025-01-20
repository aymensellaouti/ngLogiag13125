import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { APP_ROUTES } from './config/app-routes.config';
import { SecondComponent } from './components/second/second.component';

'/cv'
export const routes: Routes = [
  { path: '', component: FirstComponent},
  { path: APP_ROUTES.cv, component: CvComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'word', component: MiniWordComponent},
  { path: 'color', component: ColorComponent},
  { path: ':quelquechose/:autreChose', component: SecondComponent},
];
