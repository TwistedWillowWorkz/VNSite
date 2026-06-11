import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { RegisterRequest } from '../../models/register-request';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-modal.html',
  styleUrls: ['./register-modal.css']
})
export class RegisterModal {
  private authService = inject(AuthService);

  @Output() switchToLogin = new EventEmitter<void>();

  registrationSuccessful = false;
  registrationFailed = false;

  registerRequest: RegisterRequest = {
    displayName: '',
    email: '',
    password: ''
  };

  register(): void {
    this.registrationFailed = false;

    this.authService.register(this.registerRequest)
      .subscribe({
        next: () => {
          this.registrationSuccessful = true;
        },
        error: () => {
          this.registrationFailed = true;
        }
      });
  }

  goToLogin(): void {
    this.switchToLogin.emit();
  }
}
