import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from '../../config/constantes.config';

@Pipe({
  name: 'defaultImage',
  standalone: true
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    return path.trim() ? path : APP_CONST.defaultImage;
  }

}
