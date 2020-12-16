import {Routes} from '@angular/router';
import {ForEachComponent} from './for-each/for-each.component';
import {MapComponent} from './map/map.component';
import {FindComponent} from './find/find.component';
import {ArraySliceComponent} from './slice/array-slice.component';


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
  {
    path: 'find',
    component: FindComponent
  },
  {
    path: 'slice',
    component: ArraySliceComponent
  },
];
