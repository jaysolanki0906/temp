// home-dialog.component.ts
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-home-dialog',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, RouterModule, MatDialogModule, MatButtonModule],
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss']
})
export class HomeDialogComponent implements OnInit {
  showFooter = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<HomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { hash: string }
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.getDeepestChild(this.activatedRoute);
        const data = currentRoute.snapshot.data;
        this.showFooter = data['footer'] ?? false;
      });
  }
 
  getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  navigateTo(hash: string, event?: Event) {
    event?.preventDefault(); 
  }

  onBackClick(event: Event): void {
    this.navigateTo('settings', event);
  }

  onSaveClick(): void {
    console.log('Save button clicked');
  }

  closeDialog(): void {
    this.dialogService.clearHash();
    this.dialogRef.close();
  }
}