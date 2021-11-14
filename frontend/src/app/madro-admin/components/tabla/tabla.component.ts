import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArbutusService } from '../../services/arbutus.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
arbutus:any;

id:number=0;
  constructor(private arbutusService:ArbutusService,private router:Router) { }

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
