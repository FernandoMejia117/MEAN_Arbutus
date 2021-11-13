import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComarostaphylisService } from '../../services/comarostaphylis.service';


@Component({
  selector: 'app-comaros-lista',
  templateUrl: './comaros-lista.component.html',
  styleUrls: ['./comaros-lista.component.css']
})
export class ComarosListaComponent implements OnInit {

  comarostaphylis: any ;

  constructor(private comarostaphylisService: ComarostaphylisService, private router: Router ) { }

  ngOnInit() {
    this.comarostaphylisService.conseguirComarostaphylis()
      .subscribe(
        res => {
          this.comarostaphylis = res;
        },
        err => console.log(err)
      )
  }

  seleccionarTarjeta(id: string){
    this.router.navigate(['/admin/arbutusVistazo', id]);
  }

}
