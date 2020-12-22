import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../interfaces/contact.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<IContact>, field: string): unknown {

    if (!value) {
      return [];
    }
    if (!field) {
      return value;
    }
    return value.filter(item => item.firstName.toLowerCase().includes(field.toLowerCase()))
  }


}
