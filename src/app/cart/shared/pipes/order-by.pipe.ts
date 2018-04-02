import { Pipe } from '@angular/core';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe{
  transform(items: Array<any>, orderField: string, reverse: boolean): Array<any> {
    items.sort( ( a: any, b: any ) => {
      let productA = a[ orderField ];
      let productB = b[ orderField ];
      if (productA < productB) {
        return -1;
      }
      if (productA > productB) {
        return 1;
      }
      return 0;
    });

    if (reverse) {
      return items.reverse();
    }
    return items;
  }
}
