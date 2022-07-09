import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/Operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminroomlist',
  templateUrl: './adminroomlist.component.html',
  styleUrls: ['./adminroomlist.component.css']
})
export class AdminroomlistComponent implements OnInit {
  angForm: FormGroup;

  
  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
  ) { 
    this.angForm = this.fb.group({
      contentsofroom: ['', Validators.required],
      priceofroom: ['', Validators.required],
      typeofroom: ['', Validators.required],
      sizeofroom: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  roomsdata(angForm:any)
  {
    this.dataService.adminrooms(
      angForm.value.contentsofroom,
      angForm.value.priceofroom,
      angForm.value.typeofroom,
      angForm.value.sizeofroom,
    )
     .pipe(first())
     .subscribe( data => {
      // this.router.navigate(['rooms']);
      alert("Uploaded Successfully");
    },
      error => {
          alert("Can't Upload");
    });

  }

}
