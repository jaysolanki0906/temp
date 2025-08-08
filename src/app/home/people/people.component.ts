// people.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  memberType: string = '';
  email: string = '';

  private members = [
    { id: '1', name: 'John Doe', role: 'Admin', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', role: 'Owner', email: 'jane@example.com' },
    { id: '3', name: 'Bob Johnson', role: 'Member', email: 'bob@example.com' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    const memberId = this.route.snapshot.paramMap.get('id');
    const member = this.members.find(m => m.id === memberId);
    if (member) {
      this.memberType = member.role;
      this.email = member.email;
    } else {
      this.memberType = 'Unknown';
      this.email = 'admin@gmail.com';
      this.navigateTo('settings/people');
    }
  }

  navigateTo(hash: string, event?: Event) {
    event?.preventDefault(); // Prevent default browser navigation
    this.dialogService.setHash(hash);
    const routePath = hash.startsWith('settings/') ? hash.replace('settings/', '') : hash;
    this.router.navigate([routePath], { relativeTo: this.route.parent });
  }

  homeNavigation(event: Event) {
    this.navigateTo('settings', event);
  }
}