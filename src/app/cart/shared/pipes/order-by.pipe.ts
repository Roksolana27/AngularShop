import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform{
  transform(items: Array<any>, orderProduct: string, reverse: boolean): Array<any> {
    if (!items) return;     // TODO: ask Vitaly about this workaround


    items.sort( ( a: any, b: any ) => {
      let productA = a[ orderProduct ];
      let productB = b[ orderProduct ];
      if (productA < productB) {
        return -1;
      }
      if (productA > productB) {
        return 1;
      }
      return 0;
    });

    if (!reverse) {
      return items.reverse();
    }
    return items;
  }
}
