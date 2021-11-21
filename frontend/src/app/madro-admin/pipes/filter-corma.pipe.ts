import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCorma'
})
export class FilterCormaPipe implements PipeTransform {

  transform(value: any, arg: any): any{
    const resultCorma=[];
    const acentos:any = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};

    for(const comarostaphylis of value){
      if(comarostaphylis.especie.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1){
        resultCorma.push(comarostaphylis);
        console.log(resultCorma);
      }
      else if(comarostaphylis.estado.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis);

      else if(comarostaphylis.habito.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis);

      else if(comarostaphylis.peciolosR.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis);

      else if(comarostaphylis.hojasDT.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis);

      else if(comarostaphylis.hojasAnchas.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis);

      else if(comarostaphylis.hojasMargen.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis);

      else if(comarostaphylis.hojasEnves.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis);

      else if(comarostaphylis.inflorescencia.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis);

      else if(comarostaphylis.flores.toLowerCase().split('').map((letra: string)=>acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis);

    }
    return resultCorma;
  }

}
