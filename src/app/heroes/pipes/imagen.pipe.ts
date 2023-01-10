import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): unknown {
    const linkImage = heroe.id ? `assets/heroes/${heroe.id}.jpg` : 'assets/no-image.png'
    return linkImage;
  }

}
