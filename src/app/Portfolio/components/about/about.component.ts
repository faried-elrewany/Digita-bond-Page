import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  stats = [
    {
      icon: '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>',
      value: '10+',
      label: 'Years Experience',
    },
    {
      icon: '<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"></path>',
      value: '250+',
      label: 'Projects Completed',
    },
    {
      icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
      value: '50+',
      label: 'Team Members',
    },
    {
      icon: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>',
      value: '30+',
      label: 'Awards Won',
    },
  ];

  values = [
    "Innovation at the core", 
    "Client-centric approach", 
    "Quality over quantity", 
    "Continuous improvement"
  ];

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }
  currentSlide = 0;
  totalSlides = 3;
  sliderTrack: HTMLElement | null = null;
  dots: NodeListOf<HTMLElement> | null = null;
  ngAfterViewInit(): void {
    this.initParticles();
    this.initAnimations();
    this.initHoverEffects();
  }

  initParticles() {
    gsap.to('.particle', {
      duration: 20,
      y: -500,
      x: 'random(-100,100)',
      rotation: 'random(0,360)',
      opacity: 'random(0.2,0.8)',
      ease: 'none',
      stagger: {
        each: 0.5,
        from: 'random'
      },
      repeat: -1,
      repeatRefresh: true
    });
  }

  initAnimations() {
    // Section title animation
    gsap.from('.section-title .title-icon', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      scale: 0,
      rotation: -180,
      duration: 1,
      ease: 'elastic.out(1, 0.5)'
    });

    gsap.from('.section-title .subtitle', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.8
    });

    gsap.from('.section-title .title', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.2
    });

    gsap.to('.divider', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      width: 80,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.section-title .description', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.4
    });

    // Image container animation
    gsap.from('.image-wrapper', {
      scrollTrigger: {
        trigger: '.image-container',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.team-image', {
      scrollTrigger: {
        trigger: '.image-container',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      scale: 1.2,
      duration: 1.5,
      ease: 'power3.out'
    });

    gsap.from('.image-overlay', {
      scrollTrigger: {
        trigger: '.image-container',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      backgroundPosition: '100% 100%',
      duration: 1.5,
      ease: 'power3.out'
    });

    gsap.from('.stats-container', {
      scrollTrigger: {
        trigger: '.image-container',
        start: 'top 60%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'back.out(1.7)'
    });

    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.stats-container',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    });

    // Content container animation
    gsap.from('.content-title', {
      scrollTrigger: {
        trigger: '.content-container',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    gsap.from('.content-text', {
      scrollTrigger: {
        trigger: '.content-container',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.values-title', {
      scrollTrigger: {
        trigger: '.content-container',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out'
    });

    gsap.from('.value-item', {
      scrollTrigger: {
        trigger: '.values-container',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    });

    gsap.from('.cta-button', {
      scrollTrigger: {
        trigger: '.content-container',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      ease: 'power3.out'
    });
  }

  initHoverEffects() {
 

    // Button hover effect
    gsap.to('.cta-button', {
      boxShadow: '0 10px 25px -5px var(--primary)',
      duration: 0.3,
      paused: true,
      y: -3,
      ease: 'power2.out'
    });

    document.querySelector('.cta-button')?.addEventListener('mouseenter', () => {
      gsap.to('.cta-button', {
        boxShadow: '0 10px 25px -5px var(--primary)',
        duration: 0.3,
        y: -3,
        ease: 'power2.out'
      });
    });

    document.querySelector('.cta-button')?.addEventListener('mouseleave', () => {
      gsap.to('.cta-button', {
        boxShadow: 'none',
        duration: 0.3,
        y: 0,
        ease: 'power2.out'
      });
    });
  }

  getStatIcon(iconName: string): string {
    return this.stats.find(stat => stat.icon.includes(iconName))?.icon || '';
  }
}