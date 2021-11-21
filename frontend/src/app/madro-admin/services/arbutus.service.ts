import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Arbutus} from '../interface/arbutus';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArbutusService {

  //URI = "http://localhost:4000/api/arbutusI"


  private baseUrl: string = environment.baseUrl;

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
    return this.http.post(this.baseUrl + '/arbutusI',fd)
  }

   conseguirArbutus(){
    return this.http.get<Arbutus[]>(this.baseUrl + '/arbutusI')
  }

  conseguirArbutu(id: string){
    return this.http.get<Arbutus[]>(`${this.baseUrl}/arbutusI/${id}`);
  }

  actualizarArbutus(id: string,especie: string,estado: string,habito: string,corteza_ramas: string,corteza_ramillas: string,peciolos: string,hojas: string,flores: string){
    return this.http.put(`${this.baseUrl}/arbutusI/${id}`, {especie,estado,habito,corteza_ramas,corteza_ramillas,peciolos,hojas,flores})
  }

  eliminarArbutus(id: string){
    return this.http.delete(`${this.baseUrl}/arbutusI/${id}`)
  }
}

