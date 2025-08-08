import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService } from '../../dialog.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-dialog-home-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-dialog-home-view.component.html',
  styleUrls: ['./home-dialog-home-view.component.scss'],
})
export class HomeDialogHomeViewComponent implements OnInit, OnDestroy {
  members = [
    { id: '1', name: 'John Doe', role: 'Admin', isOwner: false },
    { id: '2', name: 'Jane Smith', role: 'Owner', isOwner: true },
    { id: '3', name: 'Bob Johnson', role: 'Member', isOwner: false },
  ];

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    
    console.log('HomeDialogHomeViewComponent loaded');
    this.checkRouteAndHash();
    window.addEventListener('hashchange', () => this.checkRouteAndHash());
  }

  ngOnDestroy(): void {
    window.removeEventListener('hashchange', () => this.checkRouteAndHash());
  }

  navigateTo(path: string, event?: Event) {
    event?.preventDefault(); 

    this.router.navigate([path]).then(() => {
      this.location.replaceState('#' + path);
    });
  }

  checkRouteAndHash() {
    const hash = window.location.hash.replace(/^#/, '');
    const currentRoute = this.route.snapshot.url.map(segment => segment.path).join('/');
    console.log('Current route:', currentRoute, 'Hash:', hash);
   
  }
}