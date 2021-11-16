import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  user = {
    email: '',
    password: ''
  }

  miLogin: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  signIn(){

    console.log(this.miLogin.value);
    const { email, password} = this.miLogin.value;

    this.authService.signIn( email, password)
    .subscribe( resp => {
      //console.log(resp);
      localStorage.setItem('token', resp.token);
      this.router.navigateByUrl('/admin/info');
    },
    err => console.log(err)

    );

  }
  /*
  signIn(){
    this.authService.signIn(this.user)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['/admin']);

      },
      err => console.log(err)
    )
  }
*/

}
