import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCorma'
})
export class FilterCormaPipe implements PipeTransform {

  transform(value: any, arg: any): any{
    const resultCorma=[];

    for(const comarostaphylis of value){
      if(comarostaphylis.especie.toLowerCase().indexOf(arg.toLowerCase())>-1)
        resultCorma.push(comarostaphylis);
      
      else if(comarostaphylis.estado.toLowerCase().indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis)

      else if(comarostaphylis.habito.toLowerCase().indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis)

      else if(comarostaphylis.peciolosR.toLowerCase().indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis)

      else if(comarostaphylis.hojasDT.toLowerCase().indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis)

      else if(comarostaphylis.hojasAnchas.toLowerCase().indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis)

      else if(comarostaphylis.hojasMargen.toLowerCase().indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis)

      else if(comarostaphylis.hojasEnves.toLowerCase().indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis)

      else if(comarostaphylis.inflorescencia.toLowerCase().indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis)

      else if(comarostaphylis.flores.toLowerCase().indexOf(arg.toLowerCase())>-1)
      resultCorma.push(comarostaphylis)

    }
    return resultCorma;
  }

}
