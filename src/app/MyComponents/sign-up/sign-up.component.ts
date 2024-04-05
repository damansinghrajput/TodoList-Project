import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TaskService } from '../../service/task.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {



  signupForm!: FormGroup;


constructor( private service:TaskService , private fb:FormBuilder, private router: Router){}


  ngOnInit(): void {
   

    this.signupForm = this.fb.group({


name:[null,Validators.required],
email:[null,Validators.required],
password:[null,Validators.required],
confirmPassword:[null,Validators.required],
    },
{   validator:this.passwordMathValidator})
  }

  passwordMathValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }


  submitForm(){

console.log(this.signupForm.value);
this.service.signup(this.signupForm.value).subscribe((response)=>{
  console.log("Response from server:",response);

if(response.message!=null && response){
 alert("hello"+response.message)
 this.router.navigateByUrl("login");
}
})

  }





}



