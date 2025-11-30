import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadComponent: () => import('./home/home/home').then(m => m.Home)},
    {path: 'auth', loadComponent: () => import('./components/auth/auth').then(m => m.Auth)},
    {path: 'register', loadComponent: () => import('./components/register/register').then(m => m.Register)},
    {path: 'rooms', loadComponent: () => import('./components/rooms/rooms').then(m => m.Rooms)},
    {path: 'vehicles', loadComponent: () => import('./components/vehicles/vehicles').then(m => m.Vehicles)},
    {path: 'safaris', loadComponent: () => import('./components/safari/safari').then(m => m.Safari)},
    {
        path: 'admin', loadComponent: () => import('./components/admin/admin').then(m => m.Admin),
        children:[
            {path: 'rooms', loadComponent: () => import('./components/admin/room-management/room-management').then(m => m.RoomManagementComponent)},
            {path: 'vehicles', loadComponent: () => import('./components/admin/vehicle-management/vehicle-management').then(m => m.VehicleManagement)},
            {path: 'safaris', loadComponent: () => import('./components/admin/safari-management/safari-management').then(m => m.SafariManagementComponent)},
        ]
    },
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
