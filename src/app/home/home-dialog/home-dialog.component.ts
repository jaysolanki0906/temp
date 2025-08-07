import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home-dialog',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './home-dialog.component.html',
  styleUrl: './home-dialog.component.scss'
})
export class HomeDialogComponent {

}
