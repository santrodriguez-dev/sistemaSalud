import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const currentRoute = activatedRoute.routeConfig.path;
    const existSession = this.isAuthenticated();
    if (currentRoute === 'login') {
      if (existSession) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    }
    if (existSession) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['login']);
    return false;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('session');
  }

}
