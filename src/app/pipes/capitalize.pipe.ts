import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any): any {
    if (typeof value === 'string') {
      const lowercasedValue = value.toLowerCase();
      return lowercasedValue.charAt(0).toUpperCase() + lowercasedValue.slice(1);
    }
    return value;
  }
}
