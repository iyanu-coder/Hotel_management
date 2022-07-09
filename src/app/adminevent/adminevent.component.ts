import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/Operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminevent',
  templateUrl: './adminevent.component.html',
  styleUrls: ['./adminevent.component.css']
})
export class AdmineventComponent implements OnInit {

  angForm: FormGroup;

  
  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
  ) { 
    this.angForm = this.fb.group({
      contents: ['', Validators.required],
      venue: ['', Validators.required],
      entryfee: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  eventdata(angForm:any)
  {
    this.dataService.adminevents(
      angForm.value.contents,
      angForm.value.venue,
      angForm.value.entryfee,
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
