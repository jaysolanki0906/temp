import { Routes } from '@angular/router';
import { HomeDialogComponent } from './home/home-dialog/home-dialog.component';
import { HomeDialogHomeViewComponent } from './home/home-dialog-home-view/home-dialog-home-view.component';
import { HideShowComponent } from './home/hide-show/hide-show.component';
import { PeopleComponent } from './home/people/people.component';

export const routes: Routes = [
   { path: 'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: '**', redirectTo: 'home' }
];
