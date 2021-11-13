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

  crearComarostaphylis(especie: string , estado: string, habito: string, peciolosR: string,  hojasDT: string, hojasAnchas: string, hojasMargen: string, hojasEnves: string, inflorescencia: string, flores: string, imagen: File){
    const fd = new FormData();
    fd.append('especie', especie);
    fd.append('estado',estado);
    fd.append('habito',habito);
    fd.append('peciolosR',peciolosR);
    fd.append('hojasDT',hojasDT);
    fd.append('hojasAnchas',hojasAnchas);
    fd.append('hojasMargen',hojasMargen);
    fd.append('hojasEnves',hojasEnves);
    fd.append('inflorescencia',inflorescencia);
    fd.append('flores',flores);
    fd.append('imagen',imagen);
    return this.http.post(this.baseUrl + '/comarostaphylisI',fd)

  }

  conseguirComarostaphylis(){
    return this.http.get<Comarostaphylis>(this.baseUrl + '/comarostaphylisI')
  }

  conseguircomarostaphyli(id: string){
    return this.http.get<Comarostaphylis>(`${this.baseUrl}/comarostaphylisI/${id}`);
  }

  actualizarComarostaphylis(id: string,especie: string , estado: string, habito: string, peciolosR: string,  hojasDT: string, hojasAnchas: string, hojasMargen: string, hojasEnves: string, inflorescencia: string, flores: string){
    return this.http.put(`${this.baseUrl}/comarostaphylisI/${id}`, {especie,estado,habito,peciolosR, hojasDT, hojasAnchas, hojasMargen, hojasEnves, inflorescencia,flores})
  }

  eliminarArbutus(id: string){
    return this.http.delete(`${this.baseUrl}/comarostaphylisI/${id}`)
  }
}
