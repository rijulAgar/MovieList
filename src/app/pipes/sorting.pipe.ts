import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: any, sortBy?: any,sordOrder?:any): any {
    if(!sortBy){
      return value;
    }
    return value.sort(function(a,b){
      if(sordOrder){
        return (a[sortBy]>b[sortBy])?0:1;  
      }else{
        return (a[sortBy]>b[sortBy])?1:0;//as
      }
      
    });
  }

}
