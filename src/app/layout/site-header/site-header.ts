import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrls: ['./site-header.css']
})
export class SiteHeader {
  @Output() loginClicked = new EventEmitter<void>();
  @Output() joinClicked = new EventEmitter<void>();

  openLogin(): void {
    this.loginClicked.emit();
  }

  openRegister(): void {
    this.joinClicked.emit();
  }
}
