import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  template: `
    <div class="container py-5">
      <h2>Sign in</h2>
      <p>Use Google to continue.</p>
      <button class="btn btn-primary" (click)="login()">Sign in with Google</button>
    </div>
  `,
})
export class LoginComponent {
  private auth = inject(AuthService);
  login() { this.auth.loginWithGoogle(); }
}
