import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArbutsService } from '../../services/arbuts.service';

@Component({
  selector: 'app-buscador-arbutus',
  templateUrl: './buscador-arbutus.component.html',
  styleUrls: ['./buscador-arbutus.component.css']
})
export class BuscadorArbutusComponent implements OnInit {

  arbutus: any ;

  constructor(private arbutusService: ArbutsService, private router: Router) { }

  ngOnInit(): void {
    this.arbutusService.conseguirArbutus()
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


}
