import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArbutsService } from '../../services/arbuts.service';

@Component({
  selector: 'app-vista-arbu',
  templateUrl: './vista-arbu.component.html',
  styleUrls: ['./vista-arbu.component.css']
})
export class VistaArbuComponent implements OnInit {

  id!: string;
  arbutu: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private arbutusService: ArbutsService) { }

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
}
