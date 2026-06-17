import { ChangeDetectorRef, Component, EventEmitter, Output, inject } from '@angular/core';
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
  private cdr = inject(ChangeDetectorRef);

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
      next: (response) => {
        console.log('User registered successfully:', response);

        this.registrationSuccessful = true;

        this.registerRequest = {
          displayName: '',
          email: '',
          password: ''
        };
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Registration failed:', error);

        this.registrationFailed = true;
        this.cdr.detectChanges();
      }
    });
  }


  goToLogin(): void {
    this.switchToLogin.emit();
  }
}
