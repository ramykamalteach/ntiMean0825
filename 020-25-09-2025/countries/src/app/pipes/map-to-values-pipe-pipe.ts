import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mapToValues', standalone: true })
export class MapToValuesPipe implements PipeTransform {
  transform(value: Record<string, string>): string {
    if (!value) return '';
    return Object.values(value).join(', ');
  }
}
