import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { HomeDialogHomeViewComponent } from './home-dialog-home-view/home-dialog-home-view.component';
import { HideShowComponent } from './hide-show/hide-show.component';
import { PeopleComponent } from './people/people.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeDialogComponent,
    children: [
      { path: '', component: HomeDialogHomeViewComponent },
      { path: 'hideshow', component: HideShowComponent },
      { path: 'people', component: PeopleComponent },
    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full' }, 
  { path: '**', redirectTo: '' } 
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class HomeModule { }
