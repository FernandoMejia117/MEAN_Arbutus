import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Arbutus } from '../interface/arbutus';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  buscarMadro( termino: string ){
      const url = `${ this.baseUrl }/arbutusI/${ termino }`;

      return this.http.get<Arbutus>(url);
  }
}
