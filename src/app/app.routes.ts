import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadComponent: () => import('./home/home/home').then(m => m.Home)},
    {path: 'auth', loadComponent: () => import('./components/auth/auth').then(m => m.Auth)},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
