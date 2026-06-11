import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SiteFooter } from './layout/site-footer/site-footer';
import { SiteHeader } from './layout/site-header/site-header';
import { HeroSection } from './shared/hero-section/hero-section';

import { LoginModal } from './auth/components/login-modal/login-modal';
import { RegisterModal } from './auth/components/register-modal/register-modal';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SiteFooter,
    SiteHeader,
    HeroSection,
    LoginModal,
    RegisterModal
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('twisted-willow-workz-website');

  activeModal: 'login' | 'register' | null = null;

  openLogin(): void {
    this.activeModal = 'login';
  }

  openRegister(): void {
    this.activeModal = 'register';
  }

  closeModal(): void {
    this.activeModal = null;
  }
}
