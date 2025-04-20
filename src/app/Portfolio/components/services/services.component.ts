import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SEOService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  activeIndex: number | null = null;
 
services: any[] = [];
  constructor(private sanitizer: DomSanitizer,private seoService:SEOService) {}
ngOnInit(): void {
this.seoService.setSeoData( 'Our Services | Digital Bond Creative Agency', 
  'Explore our premium digital services including web development, UI/UX design, and digital marketing tailored to your business needs.',undefined,
  'web development services, UI/UX design agency, digital marketing solutions, premium digital services');  
  this.services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance.",
      icon: this.sanitizer.bypassSecurityTrustHtml(`<path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>`),
      image: "assets/services/web.webp"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful interfaces designed for seamless user experiences.",
      icon: this.sanitizer.bypassSecurityTrustHtml(`<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>`),
      image: "assets/services/bond.webp"
    },
    {
      title: "Digital Marketing",
      description: "Targeted campaigns that drive traffic and sales to your business.",
      icon: this.sanitizer.bypassSecurityTrustHtml(`<path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`),
      image: "assets/services/marketing.webp"
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive branding solutions to establish your market position.",
      icon: this.sanitizer.bypassSecurityTrustHtml(`<path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>`),
      image: "assets/services/bond.webp"
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive branding solutions to establish your market position.",
      icon: this.sanitizer.bypassSecurityTrustHtml(`<path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>`),
      image: "assets/services/cms.webp"
    },
    {
      title: "Mobile Development",
      description: "Comprehensive branding solutions to establish your market position.",
      icon: this.sanitizer.bypassSecurityTrustHtml(`<path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>`),
      image: "assets/services/mobile.webp"
    }
  ];
}
  setActive(index: number) {
    this.activeIndex = index;
  }

  resetActive() {
    this.activeIndex = null;
  }
}
