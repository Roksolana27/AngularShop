import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchProduct: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchProduct) {
      return items;
    }
    searchProduct = searchProduct.toLowerCase();
    return items.filter( item => {
      return item.name.toLowerCase().includes(searchProduct);
    });
  }
}
