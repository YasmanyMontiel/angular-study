import {Routes} from '@angular/router';
import {ForEachComponent} from './for-each/for-each.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'forEach',
    component: ForEachComponent
  },
];
