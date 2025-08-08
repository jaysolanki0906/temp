// home-dialog-home-view.component.ts
import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../dialog.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-dialog-home-view',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home-dialog-home-view.component.html',
  styleUrls: ['./home-dialog-home-view.component.scss']
})
export class HomeDialogHomeViewComponent implements OnInit{
  ngOnInit(): void {
      console.log("home dilaog home view");
  }
  members = [
    { id: '1', name: 'John Doe', role: 'Admin', isOwner: false },
    { id: '2', name: 'Jane Smith', role: 'Owner', isOwner: true },
    { id: '3', name: 'Bob Johnson', role: 'Member', isOwner: false }
  ];

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateTo(hash: string, event?: Event) {
    event?.preventDefault();
    this.dialogService.setHash(hash);
    const routePath = hash.startsWith('settings/') ? hash.replace('settings/', '') : hash;
    this.router.navigate([routePath], { relativeTo: this.route });
  }
}