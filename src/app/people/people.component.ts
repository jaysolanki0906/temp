import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  imports: [FormsModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit{
  variable:any;
  memberType:string='';
  email:string="";
  constructor(private route:Router){ const nav = this.route.getCurrentNavigation();
  if (nav?.extras.state) {
    this.variable=nav.extras.state['myData'];
    console.log(nav.extras.state['myData']);
  }}
  ngOnInit(): void {
  this.memberType = this.variable.name;
  this.email = this.variable.email||"admin@gmail.com";
  }
 homeNavigation()
 {
  this.route.navigate(['./home']);
 }
}
