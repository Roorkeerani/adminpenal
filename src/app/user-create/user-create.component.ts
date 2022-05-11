import { HttpClientModule } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
userForm: FormGroup;
  constructor() {
    this.userForm =new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(5)]),
      email: new FormControl('',[Validators.email,Validators.required]),
      state: new FormControl(''),
      country: new FormControl(''),
    });
   }

  ngOnInit(): void {}

  postData(){
    if(this.userForm.valid){
     console.log(this.userForm.valid)
    }
    else{
      alert("Not valid")
    }
   
  }

}
