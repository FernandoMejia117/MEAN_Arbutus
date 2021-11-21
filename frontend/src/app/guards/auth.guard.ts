import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from './../auth/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private authservice: AuthService, private router: Router){

  }

  canActivate(): boolean{
    if (this.authservice.loggedIn()){
      return true;
    }

    this.router.navigate(['/Inicio']);
    return false;
  }

}
