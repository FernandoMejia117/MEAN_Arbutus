import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Arbutus } from 'src/app/interfaces/arbutus';
import {ArbutusService} from '../../servicios/arbutus.service'

@Component({
  selector: 'app-arbutus-lista',
  templateUrl: './arbutus-lista.component.html',
  styleUrls: ['./arbutus-lista.component.css']
})
export class ArbutusListaComponent implements OnInit {
  
  arbutus: any ;

  prueba:string ;
  

  constructor(private arbutusService: ArbutusService, private router: Router  ) { }

  ngOnInit() {
    this.arbutusService.conseguirArbutus()
      .subscribe(
        res => {
          this.arbutus = res;
        },
        err => console.log(err)
      )
  }

}
