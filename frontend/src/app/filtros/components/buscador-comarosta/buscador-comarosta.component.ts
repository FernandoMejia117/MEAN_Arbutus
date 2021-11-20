import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComarosService } from '../../services/comaros.service';

@Component({
  selector: 'app-buscador-comarosta',
  templateUrl: './buscador-comarosta.component.html',
  styleUrls: ['./buscador-comarosta.component.css']
})
export class BuscadorComarostaComponent implements OnInit {

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
    this.router.navigate(['/filtro/VistaComarostaphylis', id]);
  }

}
