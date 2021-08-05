import { Component, OnInit } from '@angular/core';

import {ArbutusService} from '../../servicios/arbutus.service'

/*interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget | null;
}*/

@Component({
  selector: 'app-arbutus-formulario',
  templateUrl: './arbutus-formulario.component.html',
  styleUrls: ['./arbutus-formulario.component.css']
})
export class ArbutusFormularioComponent implements OnInit {

  photoSelected!: string | ArrayBuffer;
  file!: File;


  constructor(private arbutusService: ArbutusService) { }

  ngOnInit(): void {
  }
/*
  onPhotoSelected(event: { target: HTMLInputElement }): void {

    if (event.target.files.length == 0 || event.target.files[0] == null ) {
      alert('Null');
    }else{
        if (event.target.files && event.target.files[0]) {
          this.file = <File>event.target.files[0];
          // imagen vistazo
          const reader = new FileReader();
          reader.onload = e => this.photoSelected = <string>reader.result;
          reader.readAsDataURL(this.file);  
        }
    }
  }
*/
  
  onPhotoSelected(e) {
    if (e.target.files && e.target.files[0]) {

      this.file = <File>e.target.files[0];

      const reader = new FileReader();

      reader.onload = e => this.photoSelected = reader.result;

      reader.readAsDataURL(this.file);

    }

  }

  subirArbutus(especie : HTMLInputElement, estado: HTMLInputElement, habito: HTMLInputElement, 
    cortezaramas: HTMLInputElement, cortezaramillas: HTMLInputElement, 
    peciolos: HTMLInputElement, hojas: HTMLInputElement, flores: HTMLInputElement): boolean{
    
      this.arbutusService.crearArbutus(especie.value,estado.value,habito.value,cortezaramas.value,cortezaramillas.value,peciolos.value,hojas.value,flores.value,this.file)
      .subscribe(res => console.log(res), err => console.log(err))
      return false;
  }
  

}

