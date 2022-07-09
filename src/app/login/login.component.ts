import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { first } from 'rxjs/Operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
  ) {
    this.angForm = this.fb.group({
     
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  postdata(angForm:any)
  {
    this.dataService.userlogin(
      angForm.value.email,
      angForm.value.password,
    )
     .pipe(first())
     .subscribe( data => {
      
      this.router.navigate(['userlandingpage']);
    },
      error => {
      alert("error")

    });
  }

}
