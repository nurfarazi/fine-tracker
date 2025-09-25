import { Injectable, inject, signal, computed } from '@angular/core';
import { Auth, authState, signInWithPopup, GoogleAuthProvider, signOut, User as FirebaseUser } from '@angular/fire/auth';
import { Router } from '@angular/router';

export type Role = 'admin' | 'user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);

  // Firebase user observable
  user$ = authState(this.auth);

  // Simple role signal (placeholder). In real app, fetch from Firestore or custom claims.
  private roleSignal = signal<Role | null>(null);
  role = computed(() => this.roleSignal());

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider);
    // Placeholder: decide role assignment externally; default as 'user'
    if (!this.roleSignal()) this.roleSignal.set('user');
  }

  async logout() {
    await signOut(this.auth);
    this.roleSignal.set(null);
    await this.router.navigate(['/login']);
  }
}
