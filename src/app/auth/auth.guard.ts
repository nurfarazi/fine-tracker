import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  // Use the AuthService's user$ observable to get current user without injecting the
  // low-level Auth token here (which caused a circular DI chain).
  const user = await firstValueFrom(authService.user$);
  if (user) return true;
  router.navigate(['/login']);
  return false;
};
