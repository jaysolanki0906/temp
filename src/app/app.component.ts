import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '20projecthased';
  constructor(private dialog: MatDialog )
  {

  }
  clickfunction()
  {
    this.dialog.open(HomeDialogComponent,{
      width:"600px"
    })
  }
}
