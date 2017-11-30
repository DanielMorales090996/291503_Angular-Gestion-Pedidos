import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsersService } from '../services/users.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private usersService: UsersService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.usersService.isLogedin()) {
       return true;
     } else {
       this.router.navigateByUrl('/login');
       return false;
     }
  }
}
