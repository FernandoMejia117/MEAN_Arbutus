import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {ArbutusService} from '../../services/arbutus.service'


interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  photoSelected!: string | ArrayBuffer | null;
  file!: File;


  constructor(private arbutusService: ArbutusService, private router: Router) { }

  ngOnInit(): void {
  }


  onPhotoSelected(e: any) {
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
      .subscribe(res => this.router.navigate(['/admin/arbutusLista']), err => console.log(err))
      return false;
  }


}
