import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalization',
  standalone: false,
})
export class CapitalizationPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    // if value is Not truthy, return it.
    if (!value) {
      return value;
    }
    // Capitalize the first letter and concatenate with the rest
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
