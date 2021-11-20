import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArbutsService } from '../../services/arbuts.service';

@Component({
  selector: 'app-lista-arbu',
  templateUrl: './lista-arbu.component.html',
  styleUrls: ['./lista-arbu.component.css']
})
export class ListaArbuComponent implements OnInit {
  mostrar:  boolean =  false;
  mensaje: String = 'Mostrar';
  mensaje_Enlace: String = 'Ocultar'
  arbutus: any ;

  constructor(private arbutusservice: ArbutsService, private router: Router ) { }

  ngOnInit(): void {
    this.arbutusservice.conseguirArbutus()
    .subscribe(
      res => {
        this.arbutus = res;
      },
      err => console.log(err)
    )
  }

  seleccionarTarjeta(id: string){
    this.router.navigate(['/filtro/VistaArbutus', id]);
  }

  mostrarOcultar(){
    if(this.mostrar){
      this.mostrar = false;
      this.mensaje_Enlace = 'Mostrar';
    }else {
      this.mostrar =  true;
      this.mensaje_Enlace = 'Ocultar';
    }
  }

}
