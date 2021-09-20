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
        /*quitarAcentos(cadena){
        const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
        return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
      }*/

  transform(value: any, arg: any): any {
          
    var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
        
    const resultArbutu=[];
    for(const arbutu of value){
      if(arbutu.especie.toLowerCase().split('').map(letra=> acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1){
        
        resultArbutu.push(arbutu);
        console.log(resultArbutu);

      }

      else if(arbutu.estado.toLowerCase().split('').map(letra=> acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1){
        resultArbutu.push(arbutu);
        console.log(resultArbutu);

      }
      else if(arbutu.habito.toLowerCase().split('').map(letra=> acentos[letra] || letra).join('').indexOf(arg.toLowerCase())>-1){
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
