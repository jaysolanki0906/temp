import { Routes } from '@angular/router';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { HomeDialogHomeViewComponent } from './home-dialog-home-view/home-dialog-home-view.component';
import { HideShowComponent } from './hide-show/hide-show.component';
import { PeopleComponent } from './people/people.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeDialogComponent,
    children: [
      { path: '', component: HomeDialogHomeViewComponent }, // default inside dialog
      { path: 'hideshow', component: HideShowComponent },
      { path: 'people', component: PeopleComponent }
    ]
  },
  { path: '**', redirectTo: 'home' }
];
