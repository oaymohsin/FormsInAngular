import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveform:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.reactiveform=new FormGroup({
      Email:new FormControl(null,[Validators.required,Validators.email]),
      Password:new FormControl(null,Validators.required),
      Address:new FormControl(null,Validators.required),
      Address2:new FormControl(null),
      City:new FormControl(null),
      State:new FormControl(null),
      Zip:new FormControl(null)
    })
  }
  submitform(){
    console.log(this.reactiveform);
  }
}
