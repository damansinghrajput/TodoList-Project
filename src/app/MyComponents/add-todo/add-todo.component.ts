import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {


  postCustomerForm!: FormGroup;

  constructor(private taskService:TaskService,
    private fb:FormBuilder,private router:Router){

  }

  ngOnInit(){
    this.postCustomerForm = this.fb.group({

      title:[null,Validators.required],
      description  :[null,Validators.required,],
      createdBy:[null,Validators.required],
      dueDate:[null,Validators.required],
      status:[null,Validators.required],
     
    })
  }

addTodo(){

// console.log(this.postCustomerForm.value);
this.taskService.addTodo(this.postCustomerForm.value).subscribe((res)=>{
  console.log(res);
  this.router.navigateByUrl('viewtodo');
})  
}




}
