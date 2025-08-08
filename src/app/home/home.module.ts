import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeDialogHomeViewComponent } from './home-dialog-home-view/home-dialog-home-view.component';
import { HideShowComponent } from './hide-show/hide-show.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleComponent } from './people/people.component';
import { HashRouteGuard } from '../hased-route.guard';
import { NoSlashHashLocationStrategy } from '../no-slash-hash-location-strategy';
import { FormsComponentComponent } from './forms-component/forms-component.component';

export const routes: Routes = [

  { path: '', component: HomeDialogHomeViewComponent, data: { footer: true } },
  { path: 'sections', component: HideShowComponent, data: { footer: true } },
  { path: 'form', component: FormsComponentComponent, data: { footer: true } },
  { path: 'people/:id', component: PeopleComponent, data: { footer: true } },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeDialogHomeViewComponent,
    HideShowComponent,
    PeopleListComponent,
    PeopleComponent,
  ],providers: [
    {  provide: LocationStrategy, useClass: NoSlashHashLocationStrategy }
  ],
  exports: [RouterModule],
})
export class HomeModule { }