import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number, currency?: string): unknown {
    
    //20000
    //$20.000

    let separator =  '.';

    let saldo = value;




    const DATA = currency ? `${currency} ${value}` : value;  

    return DATA;
  }

}
