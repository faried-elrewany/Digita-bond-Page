import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollToSectionService } from '../../../core/services/scroll-to-section.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule,RouterLink]
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
constructor(private scrollToSectionService: ScrollToSectionService){}
  ngOnInit(): void {
    this.animateHeader();
  }
  scrollToSection(id: string): void {
    this.scrollToSectionService.scrollToSection(id);
    this.isMenuOpen = false;
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Disable scroll when menu is open
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  private animateHeader(): void {
    gsap.from('header', {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    gsap.from('nav a, .contact-button', {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      delay: 0.3,
      duration: 0.5,
      ease: 'back.out'
    });
  }
}