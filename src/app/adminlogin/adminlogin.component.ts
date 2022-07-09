import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { first } from 'rxjs/Operators'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  angForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
  ) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  logindata(angForm:any)
  {
    this.dataService.adminlogin(
      angForm.value.email,
      angForm.value.password,
    )

    .pipe(first())
    .subscribe( data =>{
      alert("Logged in successfully")
      this.router.navigate(['adminlandingpage']);

    },
      error => {
        alert("Invalid Details")
      }); 
  }

}
