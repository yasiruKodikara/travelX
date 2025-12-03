import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { TokenStorage } from '../services/token-storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{
  constructor(private auth:TokenStorage, private router:Router){}

  canActivate():boolean {
    if (this.auth.getToken()) return true;
    alert('You are not authorized to access this page');
    this.router.navigate(['/auth']);
    return false;
}
}