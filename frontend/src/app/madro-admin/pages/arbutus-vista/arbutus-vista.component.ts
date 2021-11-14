import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {ArbutusService} from '../../services/arbutus.service'
import {Arbutus} from '../../interface/arbutus'
@Component({
  selector: 'app-arbutus-vista',
  templateUrl: './arbutus-vista.component.html',
  styleUrls: ['./arbutus-vista.component.css']
})
export class ArbutusVistaComponent implements OnInit {

  id!: string;
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
        this.router.navigate(['/admin/arbutusLista'])},
      err => console.log(err))
    return false;

  }


  eliminarArbutus(id: string){
      this.arbutusService.eliminarArbutus(id)
      .subscribe(
        res => {
          console.log(res),
          this.router.navigate(['/admin/arbutusLista'])
        },
        err => console.log(err)
      )
  }

}
