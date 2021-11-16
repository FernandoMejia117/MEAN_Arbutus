import { Component, OnInit } from '@angular/core';
import { ComarostaphylisService } from '../../services/comarostaphylis.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabla-comaros',
  templateUrl: './tabla-comaros.component.html',
  styleUrls: ['./tabla-comaros.component.css']
})
export class TablaComarosComponent implements OnInit {

  comarostaphylis: any


  constructor( private comarostaphylisService: ComarostaphylisService, private router: Router) { }

  ngOnInit(): void {
    this.comarostaphylisService.conseguirComarostaphylis()
    .subscribe(
      res => {
        console.log(res)
        this.comarostaphylis = res;
      },
      err => console.log(err)
    )
  }
}
