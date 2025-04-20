import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import gsap from 'gsap';
import { ScrollToSectionService } from '../../../core/services/scroll-to-section.service';
import { SEOService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnDestroy {
  // Typewriter Effect Variables
  typewriterItems = [
    {
      question: 'Why Digital Bond?',
      answer: 'Because Performance & Scalability',
    },
    { question: 'Why Digital Bond?', answer: 'Because Creative Execution' },
    {
      question: 'Why Digital Bond?',
      answer: 'Because Marketing That Converts',
    },
  ];
  currentTypewriterIndex = 0;
  displayText = { question: '', answer: '' };
  isTyping = true;
  showCursor = true;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private themeService: ThemeService,
    private scrollToSectionService: ScrollToSectionService
    ,private seoService:SEOService
  ) {}

  ngOnInit(): void {
    this.seoService.setSeoData(
      'Digital Bond Creative Agency', 
      'We craft exceptional digital experiences that connect brands with their audiences through innovative design and development.',
      undefined,
      'digital agency, web design, creative studio, branding, development'
    );
    this.getTheme();
    setTimeout(() => {
      this.prepareElasticText('.digital');
      this.prepareElasticText('.bond');
      this.initAnimations();
      this.runTypewriterEffect();
    }, 0);

    // Cursor blinking effect
    setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 530);
  }

  // === Helper Methods ===
  getTheme(): string {
    return this.themeService.getTheme();
  }
  scrollToSection(id: string): void {
    this.scrollToSectionService.scrollToSection(id);
  }
  private prepareElasticText(selector: string): void {
    const element = this.el.nativeElement.querySelector(selector);
    if (!element) return;

    const text = element.textContent.trim();
    element.innerHTML = '';

    text.split('').forEach((char: string) => {
      const span = this.renderer.createElement('span');
      this.renderer.setStyle(span, 'display', 'inline-block');
      this.renderer.setStyle(span, 'will-change', 'transform');
      span.innerHTML = char === ' ' ? '&nbsp;' : char;
      this.renderer.appendChild(element, span);
    });
  }

  // === Animations ===
  private initAnimations(): void {
    const { agency, digitalChars, bondChars } = this.getElements();

    // Text character animations
    gsap.set([digitalChars, bondChars], { opacity: 0, y: 80 });
    this.animateText(digitalChars);
    this.animateText(bondChars, 0.3);

    // Crown animation
    this.animateCrown();

    // Gold blob animation
    this.animateGoldBlob();

    // Agency text animation
    this.animateAgencyText();
  }

  private getElements() {
    return {
      agency: this.el.nativeElement.querySelector('.agency'),
      digitalChars: this.el.nativeElement.querySelectorAll('.digital span'),
      bondChars: this.el.nativeElement.querySelectorAll('.bond span'),
    };
  }

  private animateText(chars: NodeListOf<Element>, delay = 0): void {
    gsap.to(chars, {
      y: 0,
      opacity: 1,
      ease: 'elastic.out(1, 0.5)',
      stagger: 0.05,
      delay,
      duration: 1.5,
    });

    chars.forEach((char: any) => {
      char.addEventListener('mouseenter', () => this.bounceChar(char));
    });
  }

  private bounceChar(char: HTMLElement): void {
    gsap.fromTo(
      char,
      { scaleX: 1, scaleY: 1 },
      {
        scaleX: 1.3,
        scaleY: 0.7,
        duration: 0.2,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1,
      }
    );
  }

  private animateCrown(): void {
    const crown = this.el.nativeElement.querySelector('.crown-img');
    if (!crown) return;

    gsap.from(crown, {
      y: -20,
      opacity: 0,
      rotation: -10,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });

    gsap.to(crown, {
      y: -3,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }

  private animateGoldBlob(): void {
    gsap.to('.gold-blob', {
      y: 15,
      x: 8,
      rotation: 3,
      duration: 5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }

  private animateAgencyText(): void {
    const creativeWord = this.el.nativeElement.querySelector('.creative-word');
    const agencyWord = this.el.nativeElement.querySelector('.agency-word');

    if (creativeWord && agencyWord) {
      gsap.set([creativeWord, agencyWord], {
        opacity: 0,
        y: 40,
        rotationX: 90,
      });

      const tl = gsap.timeline({ delay: 1.2 });
      tl.to('.creative-word', {
        duration: 0.6,
        opacity: 1,
        y: 0,
        rotationX: 0,
        ease: 'back.out(2)',
      }).to(
        '.agency-word',
        {
          duration: 0.6,
          opacity: 1,
          y: 0,
          rotationX: 0,
          ease: 'back.out(2)',
        },
        '-=0.3'
      );
    }
  }

  // === Typewriter Effect ===
  runTypewriterEffect(): void {
    const typewriterTick = () => {
      const currentItem = this.typewriterItems[this.currentTypewriterIndex];

      if (this.isTyping) {
        if (this.displayText.question.length < currentItem.question.length) {
          this.displayText.question = currentItem.question.substring(
            0,
            this.displayText.question.length + 1
          );
          setTimeout(typewriterTick, 80);
        } else if (this.displayText.answer.length < currentItem.answer.length) {
          this.displayText.answer = currentItem.answer.substring(
            0,
            this.displayText.answer.length + 1
          );
          setTimeout(typewriterTick, 50);
        } else {
          setTimeout(() => {
            this.isTyping = false;
            typewriterTick();
          }, 2000);
        }
      } else {
        if (this.displayText.answer.length > 0) {
          this.displayText.answer = this.displayText.answer.substring(
            0,
            this.displayText.answer.length - 1
          );
          setTimeout(typewriterTick, 30);
        } else if (this.displayText.question.length > 0) {
          this.displayText.question = this.displayText.question.substring(
            0,
            this.displayText.question.length - 1
          );
          setTimeout(typewriterTick, 50);
        } else {
          setTimeout(() => {
            this.currentTypewriterIndex =
              (this.currentTypewriterIndex + 1) % this.typewriterItems.length;
            this.isTyping = true;
            typewriterTick();
          }, 500);
        }
      }
    };

    typewriterTick();
  }

  ngOnDestroy(): void {
    gsap.globalTimeline.clear();
  }
}
