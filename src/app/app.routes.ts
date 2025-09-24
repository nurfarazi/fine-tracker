import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'users', loadComponent: () => import('./users/users').then(m => m.UsersComponent) },
    { path: 'rules', loadComponent: () => import('./rules/rules').then(m => m.RulesComponent) },
    { path: 'fines', loadComponent: () => import('./fines/fines').then(m => m.FinesComponent) },
    { path: '', redirectTo: '/users', pathMatch: 'full' },
];
