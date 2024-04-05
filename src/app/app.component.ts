import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoList';


isLoggedIn(): boolean {
  if (typeof localStorage !== 'undefined') {
    return !!localStorage.getItem('jwtToken');
  } else {
    console.error('localStorage is not available in this environment.');
    return false; 
  }
}

logout(): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('jwtToken');
  } else {
    console.error('localStorage is not available in this environment.');
  }
}
}









// //   isLoggedIn(): boolean {
//   const jwt = localStorage.getItem('jwtToken');
    
// //     return !!jwt;
// //   }

// //   logout(): void {
// //     localStorage.removeItem('jwtToken');

// //   }

// // }
















  



  

