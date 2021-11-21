import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { arbutusM } from '../interfaces/arbutu';

@Injectable({
  providedIn: 'root'
})
export class ArbutsService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  conseguirArbutus(){
    return this.http.get<arbutusM[]>(this.baseUrl + '/arbutusI')
  }

  conseguirArbutu(id: string){
    return this.http.get<arbutusM[]>(`${this.baseUrl}/arbutusI/${id}`);
  }

}
