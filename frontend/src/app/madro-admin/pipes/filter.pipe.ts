import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  

  transform(value: any, arg: any): any {
    const resultArbutu=[];
    const acentos:any = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    
    for(const arbutu of value){
      
      if(arbutu.especie.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);
        console.log(resultArbutu);

      }

      else if(arbutu.estado.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);
        console.log(resultArbutu);

      }
      else if(arbutu.habito.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);
        console.log(resultArbutu);

      }
      else if(arbutu.corteza_ramas.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);

      }
      else if(arbutu.corteza_ramillas.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);

      }
      else if(arbutu.peciolos.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);

      }
      else if(arbutu.hojas.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);

      }
      else if(arbutu.flores.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);

      }

    }
    return resultArbutu;
  }

}
