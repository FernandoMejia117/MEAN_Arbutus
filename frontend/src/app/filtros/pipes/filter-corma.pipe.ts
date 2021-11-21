import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCorma'
})
export class FilterCormaPipe implements PipeTransform {

  transform(value: any, arg: any): any{
    const resultCorma=[];

    for(const comaros of value){
      if(comaros.especie.toLowerCase().indexOf(arg.toLowerCase())>-1)
      {
        resultCorma.push(comaros);
      }

      else if(comaros.estado.toLowerCase().indexOf(arg.toLowerCase())>-1){

        resultCorma.push(comaros)

      }

      else if(comaros.habito.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultCorma.push(comaros)
      }


      else if(comaros.peciolosR.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultCorma.push(comaros)
      }


      else if(comaros.hojasDT.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultCorma.push(comaros)
      }


      else if(comaros.hojasAnchas.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultCorma.push(comaros)
      }


     /* else if(comaros.hojasMargen.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultCorma.push(comaros)
      }*/


      else if(comaros.hojasEnves.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultCorma.push(comaros)
      }


      else if(comaros.inflorescencia.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultCorma.push(comaros)

      }

      else if(comaros.flores.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultCorma.push(comaros)
      }


    }
    return resultCorma;
  }

}
