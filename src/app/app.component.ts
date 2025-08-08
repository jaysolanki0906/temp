// app.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HomeDialogComponent } from './home/home-dialog/home-dialog.component';
import { DialogService } from './dialog.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MatDialogModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = '20projecthased';
  

  constructor(private dialog: MatDialog, private router:Router) {
    
  }
  openPeopleDialog() {
    this.router.navigate(['settings'])
    if (this.dialog.openDialogs.length === 0) {
      this.dialog.open(HomeDialogComponent, {
        width:"600px",
      data: { baseRoute: location.pathname.split('/').pop() },
    });
    }
  }

  
}