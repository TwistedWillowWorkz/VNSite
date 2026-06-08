import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SiteFooter } from './layout/site-footer/site-footer';
import { SiteHeader } from './layout/site-header/site-header';
import { HeroSection } from './shared/hero-section/hero-section';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SiteFooter,
    SiteHeader,
    HeroSection
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('twisted-willow-workz-website');
}
