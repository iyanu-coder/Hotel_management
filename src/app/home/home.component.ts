import { visitValue } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public name: String = "Iyanu";
  public isDisabled: boolean = true;
  public studentList: Array<String> = ["api","vv","great","ay", "tolu"]
  ngOnInit(): void {


  }
  

  saySomething(){
    alert("I am typing something")
  }

}
