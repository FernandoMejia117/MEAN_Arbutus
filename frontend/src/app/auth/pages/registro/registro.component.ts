import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miRegistro: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  registro(){
    console.log(this.miRegistro.value);
    console.log(this.miRegistro.valid);
    this.router.navigateByUrl('/admin/info');
  }

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

}
