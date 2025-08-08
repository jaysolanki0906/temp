import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-hide-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hide-show.component.html',
  styleUrl: './hide-show.component.scss'
})
export class HideShowComponent implements OnInit {
  showFooter: any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  roomSections: any[] = [
    { id: '1', name: 'Scenes', isVisible: true },
    { id: '2', name: 'Entrance', isVisible: true },
    { id: '3', name: 'Living Room', isVisible: true },
    { id: '4', name: 'Kitchen', isVisible: true },
    { id: '5', name: 'Dining Room', isVisible: true },
    { id: '6', name: 'Master Bedroom', isVisible: true },
    { id: '7', name: 'Kids\' Bedroom', isVisible: true },
    { id: '8', name: 'Bathroom', isVisible: true },
    { id: '9', name: 'Unassigned Devices', isVisible: true }
  ];

  getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  ngOnInit(): void {
    this.route.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.getDeepestChild(this.activatedRoute);
        const data = currentRoute.snapshot.data;

        this.showFooter = data['footer'] ?? false;
        console.log("this.showFooter",this.showFooter);
      });
  }

  toggleRoomVisibility(room: any): void {
    room.isVisible = !room.isVisible;
  }

  onDrop(event: any): void {}
}
