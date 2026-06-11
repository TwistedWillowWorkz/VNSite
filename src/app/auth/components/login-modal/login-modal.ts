import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.css'
})
export class LoginModal {

  loginRequest: LoginRequest = {
    email: '',
    password: ''
  };

  loginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  login(): void {

    this.loginFailed = false;
    this.errorMessage = '';

    this.authService.login(this.loginRequest)
      .subscribe({
        next: (response) => {

          this.authService.saveToken(response.token);

          console.log('Login successful');

          // Launch Vellichor Nook App
          window.location.href = 'http://localhost:4300';
        },

        error: (error) => {

          console.error('Login failed', error);

          this.loginFailed = true;
          this.errorMessage =
            'Unable to log in. Please check your email and password.';
        }
      });
  }
}
