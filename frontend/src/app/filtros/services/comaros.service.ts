import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {madroComarosta} from '../interfaces/comarostaphylis'

@Injectable({
  providedIn: 'root'
})
export class ComarosService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  conseguirComarostaphylis(){
    return this.http.get<madroComarosta[]>(this.baseUrl + '/comarostaphylisI')
  }

  conseguircomarostaphyli(id: string){
    return this.http.get<madroComarosta[]>(`${this.baseUrl}/comarostaphylisI/${id}`);
  }

}
