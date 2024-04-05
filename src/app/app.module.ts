import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { GetTodoComponent } from './MyComponents/get-todo/get-todo.component';
import { UpdateTodoComponent } from './MyComponents/update-todo/update-todo.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SearchTodoComponent } from './MyComponents/search-todo/search-todo.component';

import { SignUpComponent } from './MyComponents/sign-up/sign-up.component';
import { LoginComponent } from './MyComponents/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    GetTodoComponent,
    UpdateTodoComponent,
    SearchTodoComponent,
   
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
