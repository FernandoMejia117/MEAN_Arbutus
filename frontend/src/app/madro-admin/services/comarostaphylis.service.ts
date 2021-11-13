import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Comarostaphylis } from '../interface/comarostaphylis';

@Injectable({
  providedIn: 'root'
})
export class ComarostaphylisService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  crearComarostaphylis(especie: string , estado: string, habito: string, peciolosRamillas: string,  hojasDuracion: string, hojas_Anchas: string, hojas_Margen: string, hojasEnves: string, inflorescencia: string, flores: string, imagen: File){
    const fd = new FormData();
    fd.append('especie', especie);
    fd.append('estado',estado);
    fd.append('habito',habito);
    fd.append('peciolos_ramillas',peciolosRamillas);
    fd.append('hojas_Duraciontextura',hojasDuracion);
    fd.append('hojas_Anchas',hojas_Anchas);
    fd.append('hojas_Margen',hojas_Margen);
    fd.append('hojas_Enves',hojasEnves);
    fd.append('inflorescencia',inflorescencia);
    fd.append('flores',flores);
    fd.append('imagen',imagen);
    return this.http.post(this.baseUrl,fd)

  }

  conseguirComarostaphylis(){
    return this.http.get<Comarostaphylis>(this.baseUrl + '/comarostaphylisI')
  }

  conseguircomarostaphylis(id: string){
    return this.http.get<Comarostaphylis>(`${this.baseUrl}/comarostaphylisI/${id}`);
  }

  actualizarComarostaphylis(id: string,especie: string , estado: string, habito: string, peciolosRamillas: string,  hojasDuracion: string, hojas_Anchas: string, hojas_Margen: string, hojasEnves: string, inflorescencia: string, flores: string){
    return this.http.put(`${this.baseUrl}/comarostaphylisI/${id}`, {especie,estado,habito,peciolosRamillas, hojasDuracion, hojas_Anchas, hojas_Margen, hojasEnves, inflorescencia,flores})
  }

  eliminarArbutus(id: string){
    return this.http.delete(`${this.baseUrl}/comarostaphylisI/${id}`)
  }
}
