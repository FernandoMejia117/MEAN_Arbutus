import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AuthResponse} from '../interfaces/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private baseUrl: string = environment.baseUrl;


  constructor( private http: HttpClient, private router: Router) { }


  signUpUser(user:any) {
    return this.http.post<any>(this.baseUrl + '/signup', user);
  }

  signIn(email: string, password: string) {

    const body = {email, password};
    return this.http.post<AuthResponse>(this.baseUrl + '/signin',body)
    //return this.http.post<any>(this.baseUrl + '/signin', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/signin'])
  }

}
