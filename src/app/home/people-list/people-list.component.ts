import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-people-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent {
  constructor(private router:Router,private location: Location){

  }
employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' }
  ];
  navigateWithHash(path: string) {
  this.router.navigate([path]).then(() => {
    // Remove any leading slash so you don't get ##something
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    this.location.replaceState(`#${cleanPath}`);
  });
}

}

