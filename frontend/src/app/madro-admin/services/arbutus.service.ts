import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Arbutus} from '../interface/arbutus';

@Injectable({
  providedIn: 'root'
})
export class ArbutusService {

  URI = "http://localhost:4000/Arbutus/arbutusI"

  constructor(private http: HttpClient) { }

  crearArbutus(especie: string , estado: string, habito: string, cortezaramas:string, cortezaramillas:string, peciolos:string, hojas:string, flores:string, imagen: File){
    const fd = new FormData();
    fd.append('especie', especie);
    fd.append('estado',estado);
    fd.append('habito',habito);
    fd.append('corteza_ramas',cortezaramas);
    fd.append('corteza_ramillas',cortezaramillas);
    fd.append('peciolos',peciolos);
    fd.append('hojas',hojas);
    fd.append('flores',flores);
    fd.append('imagen',imagen);
    return this.http.post(this.URI,fd)
  }

  conseguirArbutus(){
    return this.http.get<Arbutus>(this.URI)
  }

  conseguirArbutu(id: string){
    return this.http.get<Arbutus>(`${this.URI}/${id}`);
  }

  actualizarArbutus(id: string,especie: string,estado: string,habito: string,cortezaramas: string,cortezaramillas: string,peciolos: string,hojas: string,flores: string){
    return this.http.put(`${this.URI}/${id}`, {especie,estado,habito,cortezaramas,cortezaramillas,peciolos,hojas,flores})
  }

  eliminarArbutus(id: string){
    return this.http.delete(`${this.URI}/${id}`)
  }
}
