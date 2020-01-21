import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const searchText = args[0];

    if (!searchText)
      return value;

    return value.filter((item)=> item.task.includes(searchText));
    }
    
}
