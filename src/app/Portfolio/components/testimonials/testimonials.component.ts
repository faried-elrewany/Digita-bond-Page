import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { SEOService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy ,OnInit{
currentIndex = 0;
  slideCount = 3;
  autoSlideInterval: any;
constructor(private seoService:SEOService) {}
  testimonials = [
    {
      quote: "Digital Bond transformed our online presence completely. Their creative approach and technical expertise delivered results beyond our expectations. The team was professional and truly understood our vision.",
      author: "فريد الرويني ",
      position: "Front End Angular"
    },
    {
      quote: "Working with Digital Bond was a game-changer for our brand. They took our vague ideas and turned them into a stunning digital experience. Their attention to detail and strategic thinking set them apart.",
     author: "فريد الرويني ",
      position: "Front End Angular"
    },
    {
      quote: "The team at Digital Bond delivered our project on time and exceeded all KPIs. Their ability to combine creativity with functionality is remarkable. We've seen a 40% increase in engagement since launch.",
      author: "فريد الرويني ",
      position: "Front End Angular"
    }
  ];
ngOnInit(): void {
  this.seoService.setSeoData(
    'Client Testimonials | Digital Bond Creative Agency', 
    'Hear what our clients say about our work. Real feedback from businesses we\'ve helped with web development, design, and digital solutions.',
undefined,    'client testimonials, customer reviews, agency feedback, success stories, web development case studies'
  );
}
  ngAfterViewInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slideCount;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Initiates the automatic slide transition for the testimonials carousel.
   * This method sets an interval to automatically move to the next slide
   * every 5 seconds.
   */

/*******  a7c7c1a6-c424-4804-9942-b260a3e83be9  *******/
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}
