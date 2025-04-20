import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./Portfolio/components/hero-section/hero-section.component";
import { ThemeSwitcherComponent } from "./Portfolio/components/theme-switcher/theme-switcher.component";
import { HeaderComponent } from "./Portfolio/components/header/header.component";
import { AboutComponent } from "./Portfolio/components/about/about.component";
import { ContactComponent } from "./Portfolio/components/contact/contact.component";
import { TestimonialsComponent } from "./Portfolio/components/testimonials/testimonials.component";
import { ServicesComponent } from './Portfolio/components/services/services.component';
import { LetsBondComponent } from "./Portfolio/components/lets-bond/lets-bond.component";
import { FooterComponent } from "./Portfolio/components/footer/footer.component";
import { SpeedDialComponent } from "./Portfolio/components/speed-dial/speed-dial.component";
import { PageLoadingComponent } from './Portfolio/components/page-loading/page-loading.component';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ToastComponent } from './Portfolio/components/toast/toast.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToastComponent,CommonModule,PageLoadingComponent, HeroSectionComponent, ThemeSwitcherComponent, HeaderComponent, AboutComponent, ContactComponent, TestimonialsComponent, ServicesComponent, LetsBondComponent, FooterComponent, SpeedDialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Digital-bond';
  isLoading:boolean=true;

  @ViewChild('loadingContainer') loadingContainer!: ElementRef;

  loadingState=new BehaviorSubject<boolean>(true);
  loading$=this.loadingState.asObservable();
  ngAfterViewInit() {
    if (document.readyState === 'complete') {
      this.hideLoader();
    } else {
      window.addEventListener('load', () => this.hideLoader());
    }
  }

  private hideLoader() {
    if(this.loadingContainer){

      gsap.to(this.loadingContainer.nativeElement, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          this.loadingState.next(false);
        }
      });
    }
  }
}
