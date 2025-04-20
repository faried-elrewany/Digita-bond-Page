import { Component } from '@angular/core';
import { ScrollToSectionService } from '../../../core/services/scroll-to-section.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
constructor(    private scrollToSectionService: ScrollToSectionService
){}
  scrollToSection(id: string): void {
    this.scrollToSectionService.scrollToSection(id);
  }
}
