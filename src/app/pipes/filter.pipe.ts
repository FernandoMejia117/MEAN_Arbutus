import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

filtrar_acentos(input:any){

            var acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
            var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
            for (var i = 0; i < acentos.length; i++) {
                input = input.replace(acentos.charAt(i), original.charAt(i)).toLowerCase();
            };
            return input;
       }

  transform(value: any, arg: any): any {
          
    var acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
    var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
    const resultArbutu=[];
    for(const arbutu of value){
      if(arbutu.especie.toLowerCase().normalize("NFD").replace([/[u0300-\u036f]/g,""]).indexOf(arg.toLowerCase())>-1){
        
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
      else if(arbutu.corteza_ramas.toLowerCase().indexOf(arg.toLowerCase())>-1){
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

      }

    }
    return resultArbutu;
  }

}
