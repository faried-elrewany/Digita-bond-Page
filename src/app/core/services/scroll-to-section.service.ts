import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToSectionService {

  constructor() { }
  scrollToSection(id: string): void {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: 'smooth',
      });
    }
  }
}
