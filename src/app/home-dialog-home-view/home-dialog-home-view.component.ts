import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { HomeDialogComponent } from '../home-dialog/home-dialog.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-dialog-home-view',
  imports:[CommonModule],
  templateUrl: './home-dialog-home-view.component.html',
  styleUrl: './home-dialog-home-view.component.scss'
})
export class HomeDialogHomeViewComponent {
    isHideShowRoute='Home';
     members: any[] = [
    { name: 'Aman Jambugheda', role: 'You (Owner)', isOwner: true },
    { name: 'Yashashwi', role: 'Member' },
    { name: 'Kabir', role: 'Member' }
  ];

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<HomeDialogComponent>
  ) {
     this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHideShowRoute = event.url.includes('home/hideshow');
        if(this.isHideShowRoute)
        {
          this.isHideShowRoute='hideshow';
        }
      });
  }
  dataPassFunc(event:any)
  {
    console.log(event);
     this.router.navigate(['home/people'],{ state: { myData: event } }); 
  }

  goToReorder() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHideShowRoute = event.url.includes('home/hideshow');
        console.log(this.isHideShowRoute);
      });
  this.router.navigate(['home/hideshow'],{ state: { myData: { name: 'Jay', age: 24 } } }); 

  }

}
