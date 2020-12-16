import {Routes} from '@angular/router';
import {JavascriptTipsComponent} from './tips/javascript-tips.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'tips',
    component: JavascriptTipsComponent
  },
];
