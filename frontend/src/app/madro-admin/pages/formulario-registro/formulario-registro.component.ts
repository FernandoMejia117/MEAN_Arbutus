import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {


  user = {
    email: '',
    password: ''
  }



  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }


  signUp(){
    this.authService.signUpUser(this.user)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }


  ngOnInit(): void {
  }


}
