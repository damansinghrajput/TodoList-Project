import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginForm ! : FormGroup
  authService: any;

constructor(
  private service:  TaskService , 
  private fb: FormBuilder ,   
   private router: Router
   ){}


  ngOnInit(): void {
    this.loginForm = this.fb.group({

      email:[null,Validators.required],
      password:[null,Validators.required],
  })
}


submitForm(){

  this.service.login(this.loginForm.value).subscribe(
    (response) => {
      console.log(response);
      if (response.jwtToken != null) {
        alert("Hello, Your token is " + response.jwtToken);
        const jwtToken = response.jwtToken;
        localStorage.setItem('jwtToken', jwtToken);
        
        this.router.navigateByUrl("");
      }
    }
  )



}

}
