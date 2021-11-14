import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComarostaphylisService } from '../../services/comarostaphylis.service';

@Component({
  selector: 'app-comaros-vistazo',
  templateUrl: './comaros-vistazo.component.html',
  styleUrls: ['./comaros-vistazo.component.css']
})
export class ComarosVistazoComponent implements OnInit {
  id!: string;
  comarostaphylis: any;

  constructor( private activatedRoute: ActivatedRoute, private router: Router, private comarostaphylisService: ComarostaphylisService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.comarostaphylisService.conseguircomarostaphyli(this.id)
      .subscribe(
        res => {
          this.comarostaphylis = res;
        },
        err => console.log(err)
      )
    })
  }

  actualizarComarostaphylis(especie : HTMLInputElement, estado: HTMLInputElement, habito: HTMLInputElement,
    peciolosR: HTMLInputElement, hojasDT: HTMLInputElement,
    hojasAnchas: HTMLInputElement, hojasMargen: HTMLInputElement,hojasEnves: HTMLInputElement,inflorescencia: HTMLInputElement, flores: HTMLInputElement): boolean{
    this.comarostaphylisService.actualizarComarostaphylis(this.comarostaphylis._id,especie.value,estado.value,habito.value,peciolosR.value,hojasDT.value,hojasAnchas.value,hojasMargen.value,hojasEnves.value,inflorescencia.value,flores.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/comarosLista'])},
      err => console.log(err))
    return false;

  }


     eliminarComarostaphylis(id: string){
      this.comarostaphylisService.eliminarComarostaphylis(id)
      .subscribe(
        res => {
          console.log(res),
          this.router.navigate(['/admin/comarosLista'])
        },
        err => console.log(err)
      )
  }

}
