import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number = 200): unknown {
    return value.length > length ? value.slice(0, length).trim() + '...' : value;
  }

}
