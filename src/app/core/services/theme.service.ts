import { Injectable } from '@angular/core';

type Theme = 'gold' | 'red' | 'violet';
type Mode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeKey = 'app-theme';
  private modeKey = 'app-mode';

  constructor() {
    const savedTheme = (localStorage.getItem(this.themeKey) as Theme) || 'gold';
    const savedMode = (localStorage.getItem(this.modeKey) as Mode) || 'dark';
    this.applyTheme(savedTheme, savedMode);
  }

  

  setTheme(theme: Theme) {
    const mode = this.getMode();
    this.applyTheme(theme, mode);
    localStorage.setItem(this.themeKey, theme);
  }

  setMode(mode: Mode) {
    const theme = this.getTheme();
    this.applyTheme(theme, mode);
    localStorage.setItem(this.modeKey, mode);
  }

  toggleMode() {
    const current = this.getMode();
    const newMode = current === 'dark' ? 'light' : 'dark';
    this.setMode(newMode);
  }

  getTheme(): Theme {
    return (localStorage.getItem(this.themeKey) as Theme) || 'gold';
  }

  getMode(): Mode {
    return (localStorage.getItem(this.modeKey) as Mode) || 'dark';
  }

  private applyTheme(theme: Theme, mode: Mode) {
    const html = document.documentElement;

    html.classList.remove('theme-gold', 'theme-red', 'theme-violet', 'dark',"light");
    html.classList.add(`theme-${theme}`);
    if (mode === 'dark') {
      html.classList.add('dark');
    }else{
      html.classList.add('light');

    }
  }
}
