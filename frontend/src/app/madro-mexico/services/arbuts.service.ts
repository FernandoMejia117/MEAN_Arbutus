import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Arbutus} from '../interface/arbutus';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArbutsService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  conseguirArbutus(){
    return this.http.get<Arbutus[]>(this.baseUrl + '/arbutusI')
  }

  conseguirArbutu(id: string){
    return this.http.get<Arbutus[]>(`${this.baseUrl}/arbutusI/${id}`);
  }
}
