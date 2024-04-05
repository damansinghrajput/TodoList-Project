import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs/internal/Observable';



const BASIC_URL=["http://localhost:8080/"];

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  BASIC_URL: any;
  
  

  constructor(private http:HttpClient) { }


  addTodo(task:any):Observable<any>{

    return this.http.post(BASIC_URL+"api/task/",task ,{ 
      headers:this.createdAuhtorziedHeader()
    });
  }

  getAllTodo():Observable<any>{

    return this.http.get(BASIC_URL+"api/task",{ 
      headers:this.createdAuhtorziedHeader()
    });
  }

  deleteTodo(id:number):Observable<any>{

    return this.http.delete(BASIC_URL+"api/task/"+id,{ 
      headers:this.createdAuhtorziedHeader()
    });
  
  }
  updateCustomer(id:number,task:any){
    return this.http.put(BASIC_URL+"api/task/"+id,task,{ 
      headers:this.createdAuhtorziedHeader()
    });

  }
  getTodoById(id:number):Observable<any> {
    return this.http.get(BASIC_URL+"api/task/"+id,{ 
      headers:this.createdAuhtorziedHeader()
    });
  }


  getTodoTitle(title:string):Observable<any>{
    return this.http.get(BASIC_URL+"api/task/title/"+title,{ 
      headers:this.createdAuhtorziedHeader()
    });
  }


  getTdodStatus(status:string):Observable<any>{

    return this.http.get(BASIC_URL+"api/task/status/"+status,{ 
      headers:this.createdAuhtorziedHeader()
    });
  }



  // getTitleAndStatus(title: string, status: string): Observable<any> {
  //   return this.http.get(`${this.BASIC_URL}/task/title/${title}/${status}`);
  // }

  getTitleAndStatus(title:string,status:string){
    return this.http.get(BASIC_URL+"/task/title/"+title+"/"+ status,{ 
      headers:this.createdAuhtorziedHeader()
    });
  
  }

signup(signUpRequest:any):Observable<any> {

return this.http.post(BASIC_URL+"signUp",signUpRequest);
}

login(loginRequest:any) : Observable<any>{

  return this.http.post(BASIC_URL+"login",loginRequest);
}


// token with Access Api this Method Wrok

private createdAuhtorziedHeader(): HttpHeaders {
  const jwt = localStorage.getItem('jwtToken');
 
 if (jwt) {
   console.log("Token Found In LocalStorage", jwt);
   return new HttpHeaders().set("Authorization", "Bearer " + jwt);
 } else {
   console.log("Token Not Found In LocalStorage");
   // Return an empty HttpHeaders object if no token is found
   return new HttpHeaders();
 }
}

}


// { 
//   headers:this.createdAuhtorziedHeader()
// })



















































  // getTodoTitle(title?: string): Observable<any> {
  //   if (title) {
  //     return this.http.get(BASIC_URL + "/task/title/"+title);
  //   } else {
  //     return this.http.get(BASIC_URL + "/task"); // Assuming this endpoint retrieves all todo titles
  //   }
  // }
  


