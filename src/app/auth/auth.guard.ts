import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';

export const authGuard: CanActivateFn = async () => {
  const auth = inject(Auth);
  const router = inject(Router);
  const user = auth.currentUser ?? await new Promise(resolve => {
    const unsub = auth.onAuthStateChanged(u => { unsub(); resolve(u); });
  });
  if (user) return true;
  router.navigate(['/login']);
  return false;
};
