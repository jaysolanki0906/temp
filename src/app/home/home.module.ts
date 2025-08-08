// home.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeDialogHomeViewComponent } from './home-dialog-home-view/home-dialog-home-view.component';
import { HideShowComponent } from './hide-show/hide-show.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleComponent } from './people/people.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeDialogHomeViewComponent, data: { footer: false } },
      { path: 'sections', component: HideShowComponent, data: { footer: true } },
      { path: 'people', component: PeopleListComponent, data: { footer: true } },
      { path: 'people/:id', component: PeopleComponent, data: { footer: true } }
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeDialogHomeViewComponent,
    HideShowComponent,
    PeopleListComponent,
    PeopleComponent
  ],
  exports: [RouterModule]
})
export class HomeModule {}