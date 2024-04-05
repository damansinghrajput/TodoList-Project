import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../service/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.css'
})
export class UpdateTodoComponent {


  updateTodoForm!: FormGroup;

  id:number=this.activatedRoute.snapshot.params["id"];


  constructor(private service:TaskService,private activatedRoute:ActivatedRoute,
    private fb:FormBuilder,private router:Router){

  }

  ngOnInit(){
    this.updateTodoForm = this.fb.group({

      title:[null,Validators.required],
      description  :[null,Validators.required,],
      createdBy:[null,Validators.required],
      dueDate:[null,Validators.required],
      status:[null,Validators.required],
    })

    this.getTodoById();
  }
  getTodoById(){
    this.service.getTodoById(this.id).subscribe((res)=>{
      console.log(res);
    
      this.updateTodoForm .patchValue(res);
    })
    
    }

  updateTodo(){
  this.service.updateCustomer(this.id,this.updateTodoForm .value).subscribe((res)=>{
    console.log(res);

    this.router.navigateByUrl('viewtodo');
  })
}
}
