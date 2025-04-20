import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'svg',
  standalone: true
})
export class SvgPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
