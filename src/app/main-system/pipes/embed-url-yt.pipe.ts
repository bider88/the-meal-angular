import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'embedUrlYt'
})
export class EmbedUrlYtPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1';
  }

}
