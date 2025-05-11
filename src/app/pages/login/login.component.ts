import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { LoginCredentials } from '../../models/LoginCredentials';



@Component({
  selector: 'app-login',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginModel: LoginCredentials = {
    username: '',
    password: ''
  };
  constructor(private router : Router) {}

  onLogin() {
  
  }
}