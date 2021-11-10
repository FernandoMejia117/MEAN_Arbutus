import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {ArbutusService} from '../../services/arbutus.service'
@Component({
  selector: 'app-arbutus-lista',
  templateUrl: './arbutus-lista.component.html',
  styleUrls: ['./arbutus-lista.component.css']
})
export class ArbutusListaComponent implements OnInit {

  arbutus: any ;

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

  seleccionarTarjeta(id: string){
    this.router.navigate(['/admin/arbutusVistazo', id]);
  }

}
