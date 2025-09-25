import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService, Role } from './auth.service';

export function roleGuard(allowed: Role[]): CanActivateFn {
  return () => {
    const auth = inject(AuthService);
    const role = auth.role();
    return role ? allowed.includes(role) : false;
  };
}
