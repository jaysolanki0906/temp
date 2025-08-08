// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'settings',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
];