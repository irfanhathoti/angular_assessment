import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLoaction'
})
export class SearchLoactionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
