import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComarostaphylisService } from '../../services/comarostaphylis.service';
@Component({
  selector: 'app-tabla2',
  templateUrl: './tabla2.component.html',
  styleUrls: ['./tabla2.component.css']
})
export class Tabla2Component implements OnInit {
comarosta:any;

id:number=0;
  

constructor(private comarostaphylisService:ComarostaphylisService,private router:Router) { }

  ngOnInit(): void {
    this.comarostaphylisService.conseguirComarostaphylis()
      .subscribe(
        res => {
          this.comarosta = res;
        },
        err => console.log(err)
      )
  }

}
