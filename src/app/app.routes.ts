import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { roleGuard } from './auth/role.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./auth/login').then(m => m.LoginComponent) },
  { path: 'users', canActivate: [authGuard, roleGuard(['admin'])], loadComponent: () => import('./users/users').then(m => m.UsersComponent) },
  { path: 'rules', canActivate: [authGuard], loadComponent: () => import('./rules/rules').then(m => m.RulesComponent) },
  { path: 'fines', canActivate: [authGuard], loadComponent: () => import('./fines/fines').then(m => m.FinesComponent) },
  { path: '', redirectTo: '/fines', pathMatch: 'full' },
];
