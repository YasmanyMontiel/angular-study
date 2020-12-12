import {Routes} from '@angular/router';
import {ForEachComponent} from './for-each/for-each.component';
import {MapComponent} from './map/map.component';


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
  {
    path: 'map',
    component: MapComponent
  },
];
