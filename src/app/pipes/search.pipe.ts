import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, name?: any,key?:any,filterval?:any): any {
    if(!name && filterval){
      name = filterval;
    }
    return value.filter(function(movi){
      if(name && name!=='' && key && key!==''){
        if(movi[key].toString().toLowerCase().indexOf(name.toString().toLowerCase())>-1){
        return true;
      }
    }
    else{
      return true;
    }
    });
  }

}
