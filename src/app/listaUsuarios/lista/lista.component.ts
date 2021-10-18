import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {ArbutusService} from '../../servicios/arbutus.service'
import {Arbutus} from '../../interfaces/arbutus'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  
  arbutus: any=[] ;

  prueba:string ;
  
  arrays:any[]=[];

  constructor(private arbutusService: ArbutusService, private router: Router  ) { }

  ngOnInit() {
    this.arbutusService.conseguirArbutus()
      .subscribe(
        res => {
          this.arbutus = res;
          this.arrays=this.arbutus;
        },
        err => console.log(err)
      )
  }
 
tempArray:any=[];
newArray:any=[];

  onChange(event:any){
    if(event.target.checked){
      this.tempArray=this.arrays.filter((e:any)=>e.estado==event.target.value);
      this.arbutus=[]
      this.newArray.push(this.tempArray)
      for(let i=0; i<this.newArray.length; i++){
        var firstarray =this.newArray[i];
        for(let i=0; i<firstarray.length; i++){
          var obj =firstarray[i];
          this.arbutus.push(obj);
        }
      }
      console.log(this.newArray)

    }
    else{
      this.tempArray=this.arbutus.filter((e:any)=>e.estado!=event.target.value);
      this.newArray=[];
      this.arbutus=[];
      this.newArray.push(this.tempArray);
      for(let i=0; i<this.newArray.length; i++){
        var firstarray =this.newArray[i];
        for(let i=0; i<firstarray.length; i++){
          var obj =firstarray[i];
          this.arbutus.push(obj);
        }
      }

    }if(event.target.checked==false){
      this.arbutus.push()
    }

  }
    
        
  



  seleccionarTarjeta(id: string){
    this.router.navigate(['de', id]);
  }

}
