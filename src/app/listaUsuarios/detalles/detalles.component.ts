import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {ArbutusService} from '../../servicios/arbutus.service'
import {Arbutus} from '../../interfaces/arbutus'

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  id: string;
  arbutu: any;

  constructor(
    private activateRoute: ActivatedRoute, 
    private router: Router,
    private arbutusService: ArbutusService) { }

  ngOnInit(){
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.arbutusService.conseguirArbutu(this.id)
      .subscribe(
        res => {
          this.arbutu = res;
        },
        err => console.log(err)
      )
    })

    
  }

  actualizarArbutus(especie : HTMLInputElement, estado: HTMLInputElement, habito: HTMLInputElement, 
    cortezaramas: HTMLInputElement, cortezaramillas: HTMLInputElement, 
    peciolos: HTMLInputElement, hojas: HTMLInputElement, flores: HTMLInputElement): boolean{
    this.arbutusService.actualizarArbutus(this.arbutu._id,especie.value,estado.value,habito.value,cortezaramas.value,cortezaramillas.value,peciolos.value,hojas.value,flores.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/arbutusFotos'])},
      err => console.log(err))
    return false;
    
  }


  eliminarArbutus(id: string){
      this.arbutusService.eliminarArbutus(id)
      .subscribe(
        res => {
          console.log(res),
          this.router.navigate(['/arbutusFotos'])
        },
        err => console.log(err)
      )
  }

  

}

