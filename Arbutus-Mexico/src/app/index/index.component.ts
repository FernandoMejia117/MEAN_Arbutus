import { Component, OnInit } from '@angular/core';
import { ArbutusService } from '../servicios/arbutus.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  arbutus: any ;

  prueba:string ;
  

  constructor(private arbutusService: ArbutusService, private router: Router  ) { }
  filterArbutu='';
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
    this.router.navigate(['/arbutusFotos', id]);
  }
}
