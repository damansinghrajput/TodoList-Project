import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { ActivatedRoute } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrl: './search-todo.component.css'
})
export class SearchTodoComponent {
 

  search : any=[];

  title: string = ''; 
  status: string = ''; 

  allData: any=[];
  

  constructor(private service: TaskService,private activatedRoute:ActivatedRoute) { }


searchTodos() {
  if (this.title && this.title.trim() !== '' && this.status && this.status.trim() !== '' ) {
    this.getTitleAndStatus();
  } else if (this.title && this.title.trim() !== '') {
    this.getTodoTitle();
  } else if (this.status && this.status.trim() !== '') {
    this.getTodoStatus();
  } else {
    this.getAllTodo();
  }
}

  getAllTodo() {

    this.service.getAllTodo().subscribe((res) => {

      console.log(res);

      this.allData = res;
    })
  }

  
  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.params['title']; 
    this.getTodoTitle(); 
  }

  getTodoTitle() {
    this.service.getTodoTitle(this.title).subscribe((res) => {
      console.log(res);
      this.search = res;
      
    });
  }



  getTodoStatus() {
    this.service.getTdodStatus(this.status).subscribe((res) => {
      console.log(res);
      this.search = res;
      
    });
  }
  

   deleteTodo(id: number){
    console.log(id);
    this.service.deleteTodo(id).subscribe((res) => {

      console.log(res);

      this.getAllTodo();   
  })
 }


//  serach for
 getTitleAndStatus(){

  this.service.getTitleAndStatus(this.title,this.status).subscribe((res) => {
    console.log(res);
    this.search = res;
    
  });

 }




}

  


