import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { gsap } from 'gsap';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ToastComponent implements AfterViewInit, OnDestroy {
  @ViewChild('Toast', { read: TemplateRef }) toastTemplate!: TemplateRef<any>;
  @ViewChild('topLeft', { read: ViewContainerRef }) topLeft!: ViewContainerRef;
  @ViewChild('topRight', { read: ViewContainerRef }) topRight!: ViewContainerRef;
  @ViewChild('bottomLeft', { read: ViewContainerRef }) bottomLeft!: ViewContainerRef;
  @ViewChild('bottomRight', { read: ViewContainerRef }) bottomRight!: ViewContainerRef;

  private subscription: Subscription;

  constructor(private toastService: ToastService) {
    this.subscription = this.toastService.toasts$.subscribe((config) => {
      if (config) {
        this.showToast(config.position, config.type, config.msg);
      }
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showToast(
    position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' = 'topRight',
    type: string,
    msg: string
  ) {
    const container = this[position]; // Get the container based on position
    if (!container || !this.toastTemplate) {
      console.error('Container or toast template is not available.');
      return;
    }

    // Create the toast
    const toastRef = container.createEmbeddedView(this.toastTemplate, {
      $implicit: {
        title: type.toUpperCase(), 
        msg: msg,
        type: type,
        close: () => {
          this.closeToast(toastRef); // Close the specific toast
        },
      },
    });
    this.animateIn(toastRef);

    setTimeout(() => {
      this.closeToast(toastRef); 
    }, 3000);
  }

  animateIn(toastRef: any) {
    const toastElement = toastRef.rootNodes[0]; 
    gsap.from(toastElement, {
      opacity: 0,
      y: -20, // Slide-in from above
      duration: 0.5,
      ease: 'power2.out',
    });
  }

  closeToast(toastRef: any) {
    const toastElement = toastRef.rootNodes[0]; 
    gsap.to(toastElement, {
      opacity: 0,
      y: 40,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        toastRef.destroy(); 
      },
    });
  }
}
