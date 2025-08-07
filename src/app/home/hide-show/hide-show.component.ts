import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hide-show',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './hide-show.component.html',
  styleUrl: './hide-show.component.scss'
})
export class HideShowComponent  {
  constructor(private route:Router){
   
  }
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

  toggleRoomVisibility(room: any): void {
    room.isVisible = !room.isVisible;
  }

  onDrop(event:any): void {
    
  }

  onBackClick(): void {
    this.route.navigate(['./home']);
  }

  onSaveClick(): void {
    console.log('Save button clicked');
    console.log('Current room configuration:', this.roomSections);
    // Add save logic here
  }

}
