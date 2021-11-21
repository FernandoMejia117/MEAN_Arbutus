import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArbutsService } from '../../services/arbuts.service';

@Component({
  selector: 'app-lista-arbu',
  templateUrl: './lista-arbu.component.html',
  styleUrls: ['./lista-arbu.component.css']
})
export class ListaArbuComponent implements OnInit {
  mostrar:  boolean =  false;
  mensaje: String = 'Mostrar';
  mensaje_Enlace: String = 'Ocultar'
  arbutus: any ;
  arrays:any[]=[];

  constructor(private arbutusservice: ArbutsService, private router: Router ) { }

  ngOnInit(): void {
    this.arbutusservice.conseguirArbutus()
    .subscribe(
      res => {
        this.arbutus = res;
        this.arrays=this.arbutus;
      },
      err => console.log(err)
    )
  }

  seleccionarTarjeta(id: string){
    this.router.navigate(['/filtro/VistaArbutus', id]);
  }

  mostrarOcultar(){
    if(this.mostrar){
      this.mostrar = false;
      this.mensaje_Enlace = 'Mostrar';
    }else {
      this.mostrar =  true;
      this.mensaje_Enlace = 'Ocultar';
    }
  }
  checkBox_Estado:any=[
    {
      id:1,
      type:"checkbox",
      estado:"Aguascalientes"
    },
    {
      id:2,
      type:"checkbox",
      estado:"Chiapas"
    },
    {
      id:3,
      type:"checkbox",
      estado:"Baja California Sur"
    },
    {
      id:4,
      type:"checkbox",
      estado:"Baja California"
    },

    {
      id:5,
      type:"checkbox",
      estado:"Campeche"
    },
    {
      id:6,
      type:"checkbox",
      estado:"Chihuahua"
    },
    {
      id:7,
      type:"checkbox",
      estado:"Ciudad de México"
    },
    {
      id:8,
      type:"checkbox",
      estado:"Coahuila"
    },
    {
      id:9,
      type:"checkbox",
      estado:"Colima"
    }
    ,
    {
      id:10,
      type:"checkbox",
      estado:"Durango"
    }
    ,
    {
      id:11,
      type:"checkbox",
      estado:"Guanajuato"
    }
    ,
    {
      id:12,
      type:"checkbox",
      estado:"Guerrero"
    }
    ,
    {
      id:13,
      type:"checkbox",
      estado:"Hidalgo"
    }
    ,
    {
      id:14,
      type:"checkbox",
      estado:"Jalisco"
    }
    ,
    {
      id:15,
      type:"checkbox",
      estado:"Michoacán"
    }
    ,
    {
      id:16,
      type:"checkbox",
      estado:"Morelos"
    }
    ,
    {
      id:17,
      type:"checkbox",
      estado:"Nayarit"
    }
    ,
    {
      id:18,
      type:"checkbox",
      estado:"Nuevo León"
    }
    ,
    {
      id:19,
      type:"checkbox",
      estado:"Oaxaca"
    }
    ,
    {
      id:20,
      type:"checkbox",
      estado:"Puebla"
    },
    {
      id:21,
      type:"checkbox",
      estado:"Querétaro"
    },
    {
      id:22,
      type:"checkbox",
      estado:"Quintana Roo"
    },
    {
      id:23,
      type:"checkbox",
      estado:"San Luis Potosí"
    },
    {
      id:24,
      type:"checkbox",
      estado:"Sinaloa"
    },
    {
      id:25,
      type:"checkbox",
      estado:"Sonora"
    },
    {
      id:26,
      type:"checkbox",
      estado:"Tabasco"
    },
    {
      id:27,
      type:"checkbox",
      estado:"Tamaulipas"
    },
    {
      id:28,
      type:"checkbox",
      estado:"Tlaxcala"
    },
    {
      id:29,
      type:"checkbox",
      estado:"Veracruz"
    },
    {
      id:30,
      type:"checkbox",
      estado:"Yucatán"
    },
    {
      id:31,
      type:"checkbox",
      estado:"Zacatecas"
    }
  ]
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

  }


}

}
