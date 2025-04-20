import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css'
})
export class ThemeSwitcherComponent {

  constructor(private themeService: ThemeService) {}

  switchTheme(theme: any) {
    this.themeService.setTheme(theme);
    this.closeMenu();

  }
  themeOptions = [
    { name: 'gold', label: 'Gold', color: '#FFD700' },
    { name: 'red', label: 'Red', color: '#EF4444' },
    { name: 'violet', label: 'Violet', color: '#8B5CF6' }
  ];
  
  toggleMode() {
    this.themeService.toggleMode();
    this.closeMenu();

  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  

  

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.theme-switcher-container')) {
      this.closeMenu();
    }
  }
}
