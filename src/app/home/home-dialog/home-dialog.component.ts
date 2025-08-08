// home-dialog.component.ts
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from '../../dialog.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-dialog',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, RouterModule, MatDialogModule, MatButtonModule],
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss']
})
export class HomeDialogComponent implements OnInit {
  showFooter = false;
  hash = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
    private location: Location,
    private dialogRef: MatDialogRef<HomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { hash: string }
  ) {}

  ngOnInit(): void {
    // this.router.navigate(['settings/people']);
   this.setHash();
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      const currentRoute = this.getDeepestChild(this.activatedRoute);
      const data = currentRoute.snapshot.data;
      this.showFooter = data['footer'] ?? false;

      // Reapply hash if it's missing
      if (!window.location.hash && this.hash) {
        this.location.replaceState(`#${this.hash}`);
      }
    });
  }
  ngOnDestroy(): void {
     window.removeEventListener('hashchange', this.setHash.bind(this));
  }

 
  getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
  setHash() {
    this.hash = window.location.hash.replace('#', '');
  }

   navigateTo(sub: string) {
  const cleanPath = sub.startsWith('/') ? sub.slice(1) : sub;
  this.router.navigateByUrl(`#${cleanPath}`);
}


  onBackClick(event: Event): void {
    this.location.back()
  }

  onSaveClick(): void {
    console.log('Save button clicked');
  }

  closeDialog(): void {
    this.dialogService.clearHash();
    this.dialogRef.close();
  }
}