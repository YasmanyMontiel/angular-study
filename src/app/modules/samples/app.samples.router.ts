import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'array',
    loadChildren: () => import('./array/app.array.module')
      .then((mod) => mod.ArrayModule),
  },
  {
    path: 'javascript',
    loadChildren: () => import('./javascript/app.javascript.module')
      .then((mod) => mod.JavascriptModule),
  },
];
