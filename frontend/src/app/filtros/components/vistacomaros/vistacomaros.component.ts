import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComarosService } from '../../services/comaros.service';


@Component({
  selector: 'app-vistacomaros',
  templateUrl: './vistacomaros.component.html',
  styleUrls: ['./vistacomaros.component.css']
})
export class VistacomarosComponent implements OnInit {
  id!: string;
  comarostaphylis: any;


  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private comarostaphylisService: ComarosService) { }

    ngOnInit(){
      this.activateRoute.params.subscribe(params => {
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

}
