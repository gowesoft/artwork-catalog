import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasePipe'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string): string {
    return value?.toUpperCase();
  }

}
