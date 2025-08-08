// app.component.ts (unchanged, included for completeness)
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HomeDialogComponent } from './home/home-dialog/home-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '20projecthased';

  constructor(private dialog: MatDialog, private router: Router,private location: Location) { }

  openPeopleDialog() {
    this.router.navigate(['settings']).then(() => {
      if (this.dialog.openDialogs.length === 0) {
        this.dialog.open(HomeDialogComponent, {
          width: '600px',
          data: { baseRoute: location.pathname.split('/').pop() },
        });
      }
      this.location.replaceState('#settings');
    });
  }
  navigateTo(path: string) {
    window.location.hash = path;
  }
}