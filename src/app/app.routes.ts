import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { APP_ROUTES } from './config/app-routes.config';
import { SecondComponent } from './components/second/second.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { AddcvComponent } from './cv/addcv/addcv.component';
import { authGuard } from './auth/auth.guard';


export const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: APP_ROUTES.login, component: LoginComponent },
  { path: APP_ROUTES.cv, component: CvComponent },
  {
    path: `${APP_ROUTES.cv}/add`,
    component: AddcvComponent,
    canActivate: [authGuard],
  },
  { path: `${APP_ROUTES.cv}/:id`, component: DetailsCvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'color', component: ColorComponent },
  { path: ':quelquechose/:autreChose', component: SecondComponent },
  { path: '**', component: NF404Component },
];
