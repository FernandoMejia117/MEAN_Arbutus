import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultArbutu=[];
    for(const arbutu of value){
      if(arbutu.especie.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);
        console.log(resultArbutu);

      }

      else if(arbutu.estado.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);
        console.log(resultArbutu);

      }
      else if(arbutu.habito.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);
        console.log(resultArbutu);

      }
      /*else if(arbutu.corteza_ramas.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);

      }
      else if(arbutu.corteza_ramillas.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);

      }
      else if(arbutu.peciolos.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);

      }
      else if(arbutu.hojas.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);

      }
      else if(arbutu.flores.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);

      }*/

    }
    return resultArbutu;
  }

}
