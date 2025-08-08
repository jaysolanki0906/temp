import { Routes } from '@angular/router';
import { HashRouteGuard } from './hased-route.guard';

export const routes: Routes = [
  {
    path: 'settings',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate:[HashRouteGuard]
  },
];