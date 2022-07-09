import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RommsdetailsComponent } from '../rommsdetails/rommsdetails.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  // onSelect(rooms) {
  //   this.router.navigate(['/rommsdetails', RommsdetailsComponent]);
  // }

}
