import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComarostaphylisService } from '../../services/comarostaphylis.service';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-formulario-comaros',
  templateUrl: './formulario-comaros.component.html',
  styleUrls: ['./formulario-comaros.component.css']
})
export class FormularioComarosComponent implements OnInit {
  photoSelected!: string | ArrayBuffer | null;
  file!: File;

  constructor(private comarostaphylisService: ComarostaphylisService, private router: Router) { }

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



  subirComarostaphylis(especie : HTMLInputElement, estado: HTMLInputElement, habito: HTMLInputElement, peciolosR: HTMLInputElement, hojasDT: HTMLInputElement, hojasAnchas:  HTMLInputElement, hojasMargen:  HTMLInputElement, hojasEnves:  HTMLInputElement, inflorescencia:  HTMLInputElement, flores:  HTMLInputElement ): boolean{

      this.comarostaphylisService.crearComarostaphylis(especie.value,estado.value,habito.value,peciolosR.value,hojasDT.value,hojasAnchas.value,hojasMargen.value,hojasEnves.value,inflorescencia.value,flores.value,this.file)
      .subscribe(res => this.router.navigate(['/admin/arbutusLista']), err => console.log(err))
      return false;
  }
}

