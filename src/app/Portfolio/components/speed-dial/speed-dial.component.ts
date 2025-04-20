import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.css'],
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeedDialComponent implements AfterViewInit,OnInit {
  @ViewChild('speedDialMenu', { static: false }) speedDialMenu!: ElementRef;

  speedDialItems = [
    {
      label: 'WhatsApp',
      imageSrc: 'assets/icons/whatsapp-svgrepo-com.svg', 
      url: 'https://wa.me/+201552805430',
      action: 'openLink',
    },
    {
      label: 'Gmail',
      imageSrc: 'assets/icons/gmail-svgrepo-com.svg', 
      url: 'mailto:fariedm137@gmail.com',
      action: 'openLink',
    },
    {
      label: 'Phone',
      imageSrc: 'assets/icons/phone-black.svg',
      url: 'tel:+201552805430',
      action: 'openLink',
    },
  ];

  menuOpen = false;

  ngAfterViewInit() {
    if (this.menuOpen) {
      this.openMenu();
    }
  }
  ngOnInit() {
    // Preload images
    this.speedDialItems.forEach(item => {
      const img = new Image();
      img.src = item.imageSrc;
    });
  }
  toggleMenu() {
    if (this.menuOpen) {
      this.closeMenu();
    } else {
      this.menuOpen = true; // Set menuOpen to true before animating
      setTimeout(() => {
        this.openMenu(); 
      }, 0);
    }
  }

  openMenu() {
    if (this.speedDialMenu) {
      const menu = this.speedDialMenu.nativeElement;
      gsap.fromTo(
        menu,
        { opacity: 0, y: 20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' ,delay:.2}
      );
    }
  }

  closeMenu() {
    if (this.speedDialMenu) {
      const menu = this.speedDialMenu.nativeElement;
      gsap.to(menu, {
        opacity: 0,
        y: 20,
        scale: 0.8,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          this.menuOpen = false; // Set menuOpen to false after animation
        },
      });
    } else {
      this.menuOpen = false; // Fallback in case speedDialMenu is undefined
    }
  }

  onItemClicked(item: any) {
    if (item.action === 'openLink') {
      window.open(item.url, '_blank');
    }
    this.closeMenu(); // Close the menu after clicking an item
  }
}