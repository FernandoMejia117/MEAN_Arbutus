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
  arrays:any[]=[];

  constructor(private arbutusService: ArbutsService, private router: Router) { }
  filterArbutu='';
  ngOnInit(): void {
    this.arbutusService.conseguirArbutus()
    .subscribe(
      res => {
        this.arbutus = res;
        this.arrays=this.arbutus;
      },
      err => console.log(err)
    )
  }

  seleccionarTarjeta(id: string){
    this.router.navigate(['/filtro/VistaArbutus', id]);
  }

  


}
