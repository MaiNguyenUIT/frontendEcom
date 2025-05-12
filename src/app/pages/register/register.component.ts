import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/authService/auth.service';
import { RegisterCredentials } from '../../models/request/RegisterCredentials';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerModel : RegisterCredentials = {
    displayName : '',
    username : '',
    password : '',
  }

  confirmPassword : string = ''

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {

    if (this.registerModel.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    this.authService.register(this.registerModel).subscribe({
      next : (res) => {
        window.alert(res);
      },
    })
  }
}