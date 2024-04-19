import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'touppercase'
})
export class TouppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value) return value;
    return value.toUpperCase();
  }

}
