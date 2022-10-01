import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  @ViewChild('formdata') form:NgForm | any;
  email='';
  password='';
  address='';
  address2='';
  city='';
  state='';
  zip='';
  genderr='';
  defaultstate="sindh";
  useremail="";
  statevalue="";

  defaultgender="Female";
  gender=[
    {
      id:'1', 
      value:'Male'
    },
    {
      id:'2', 
      value:'Female'
    },
    {
      id:'3', 
      value:'Other'
    }

  ]
  statesarray=[
    'sindh','punjab','kpk','Balochistan'
  ]
  constructor() { }
  
  ngOnInit(): void {
  }
  submitform(){
    console.log(this.form);

    this.email=this.form.value.PersonDetails.Email;
    this.password=this.form.value.PersonDetails.password;
    this.address=this.form.value.PersonDetails.address;
    this.address2=this.form.value.Address2;
    this.state=this.form.value.state;
    this.city=this.form.value.city;
    this.zip=this.form.value.zip;
    this.genderr=this.form.value.Gender;
    this.form.reset();
  }
  updateDetails(){
    // this.form.value.Gender='';
    // this.form.value.PersonDetails={
    //   Email:'oaymohsin@gmail.com',
    //   password:'789654',
    //   address:'Nishat Colony Lahore'
    // };
    // this.form.value.state='punjab';

    this.form.setValue({
      
        Gender:'',
      PersonDetails:{
        Email:'oaymohsin@gmail.com',
        password:'789654',
        address:'Nishat Colony Lahore'
      },
      state:'punjab'
      
    })
    
  }
  updatedetailsviapatch(){
    this.form.form.patchValue({
    PersonDetails:{
      Email:'oaymohsin@gmail.com',
      password:'789654',
      address:'Nishat Colony Lahore'
    }
    
  })
  }
}
