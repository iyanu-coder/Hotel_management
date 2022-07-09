import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/Operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  angForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
  ) {
    this.angForm = this.fb.group({
      f_name: ['', Validators.required],
      l_name: ['', Validators.required],
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      country: ['', Validators.required],
      phone_number: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  postdata(angForm:any)
  {
    this.dataService.userregistration(
      angForm.value.f_name,
      angForm.value.l_name,
      angForm.value.email,
      angForm.value.country,
      angForm.value.phone_number,
      angForm.value.username,
      angForm.value.password,
    )
     .pipe(first())
     .subscribe( data => {
      this.router.navigate(['login']);
    },
      error => {

    });

  }
}
