import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComarosService } from '../../services/comaros.service';

@Component({
  selector: 'app-listacomaros',
  templateUrl: './listacomaros.component.html',
  styleUrls: ['./listacomaros.component.css']
})
export class ListacomarosComponent implements OnInit {
  mostrar:  boolean =  false;
  mensaje: String = 'Mostrar';
  mensaje_Enlace: String = 'Ocultar'
  comarostaphylis: any ;

  constructor(private comarostaphylisService: ComarosService, private router: Router) { }

  ngOnInit(): void {
    this.comarostaphylisService.conseguirComarostaphylis()
    .subscribe(
      res => {
        this.comarostaphylis = res;
      },
      err => console.log(err)
    )
  }
  seleccionarTarjeta(id: string){
    this.router.navigate(['/filtro/VistaComorastophylis', id]);
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
