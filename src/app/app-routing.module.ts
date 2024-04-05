import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { GetTodoComponent } from './MyComponents/get-todo/get-todo.component';
import { UpdateTodoComponent } from './MyComponents/update-todo/update-todo.component';
import { SearchTodoComponent } from './MyComponents/search-todo/search-todo.component';

import { LoginComponent } from './MyComponents/login/login.component';
import { SignUpComponent } from './MyComponents/sign-up/sign-up.component';
import { authGuardGuard } from './auth-guard.guard';

const routes: Routes = [ {path:"addTodo" ,component:AddTodoComponent},
{path:"viewtodo",component:GetTodoComponent},
{path:"Updatetodo/:id",component:UpdateTodoComponent},
{path:"SearchTodo",component:SearchTodoComponent},


{path:"signUp",component:SignUpComponent},
{path:"login",component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
