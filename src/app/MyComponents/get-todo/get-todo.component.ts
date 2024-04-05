import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-get-todo',
  templateUrl: './get-todo.component.html',
  styleUrl: './get-todo.component.css'
})
export class GetTodoComponent {
tasks: any=[];

constructor(private service: TaskService) { }



  ngOnInit() {
   this.getAllTodo();
  }

  getAllTodo() {

    

    this.service.getAllTodo().subscribe((res) => {

      console.log(res);

      this.tasks = res;
    })
  }

  deleteTodo(id: number){
    console.log(id);
    this.service.deleteTodo(id).subscribe((res) => {

      console.log(res);

      this.getAllTodo();   
  })
 }
 

}