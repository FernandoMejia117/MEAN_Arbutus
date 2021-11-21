import { Component, OnInit } from '@angular/core';
import { ArbutusService } from '../../services/arbutus.service';
import { Router } from '@angular/router';
import { Arbutus } from '../../interface/arbutus';



@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  arbutus: Arbutus[]= [];


  constructor( private arbutusService: ArbutusService, private router: Router ) { }

  ngOnInit(): void {
    this.arbutusService.conseguirArbutus()
    .subscribe(
      res => {
        this.arbutus = res;
      },
      err => console.log(err)
    )
  }

}
