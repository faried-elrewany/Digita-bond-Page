import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEOService } from '../../../core/services/seo.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactForm!: FormGroup;
  submitted = false;
  isLoading = false;
  formSubmitted = false;
  touchedFields: { [key: string]: boolean } = {
    name: false,
    email: false,
    subject: false,
    message: false
  };

  constructor(private fb: FormBuilder,private seoService:SEOService,    private toastService: ToastService
  ) {
   
  }

  // Custom validator to prevent special characters in names
  noSpecialCharsValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const regex = /^[a-zA-Z\u0600-\u06FF\s]*$/; // Allows English, Arabic letters and spaces
    if (control.value && !regex.test(control.value)) {
      return { 'specialChars': true };
    }
    return null;
  }

  // Custom validator to prevent numbers in names
  noNumbersValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const regex = /\d/;
    if (control.value && regex.test(control.value)) {
      return { 'containsNumbers': true };
    }
    return null;
  }



  noSpecialCharsExceptValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const regex = /^[a-zA-Z0-9\u0600-\u06FF\s\-\?\.\,]*$/;
    if (control.value && !regex.test(control.value)) {
      return { 'invalidChars': true };
    }
    return null;
  }

  noUrlsValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const urlRegex = /(https?:\/\/|www\.)[^\s]+/gi;
    if (control.value && urlRegex.test(control.value)) {
      return { 'containsUrl': true };
    }
    return null;
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        this.noSpecialCharsValidator,
        this.noNumbersValidator
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      subject: ['', [
        Validators.required,
        Validators.minLength(3),
        this.noSpecialCharsExceptValidator
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
        this.noUrlsValidator
      ]]
    });
    gsap.registerPlugin(ScrollTrigger);
    this.seoService.setSeoData(
      'Contact Us | Digital Bond Creative Agency',
      'Get in touch with our team to discuss your project. We offer web development, design, and digital solutions to grow your business.',
      undefined, 
      'contact digital agency, web development inquiry, design consultation, project quote'
    );
  }

  ngAfterViewInit(): void {
    this.initAnimations();
    this.setupInputAnimations();
  }

  initAnimations(): void {
    // Animation code remains the same as before
    gsap.from('.contact-page', {
      scrollTrigger: {
        trigger: '.contact-page',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out'
    });

    gsap.from('#contact-header', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out'
    });

    gsap.from('#contact-info', {
      scrollTrigger: {
        trigger: '#contact-info',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: -30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    gsap.from('#contact-form', {
      scrollTrigger: {
        trigger: '#contact-form',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  }

  setupInputAnimations(): void {
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, {
          scale: 1.02,
          duration: 0.2,
          ease: 'power2.out'
        });
      });

      input.addEventListener('blur', () => {
        gsap.to(input, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        });
      });
    });
  }

  checkFieldValidity(fieldName: string): void {
    this.touchedFields[fieldName] = true;
    const field = this.f[fieldName];
    if (field.errors) {
      const inputElement = document.getElementById(fieldName);
      if (inputElement) {
        gsap.fromTo(inputElement, 
          { backgroundColor: 'rgba(239, 68, 68, 0.1)' },
          { 
            backgroundColor: 'transparent',
            duration: 1,
            ease: 'power2.out'
          }
        );
      }
    }
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.formSubmitted = false;
    
    Object.keys(this.touchedFields).forEach(key => {
      this.touchedFields[key] = true;
    });

    if (this.contactForm.invalid) {
      this.toastService.showToast('warning', 'Please Fill The Required Inputs', 'topRight');

      Object.keys(this.contactForm.controls).forEach(key => {
        if (this.contactForm.controls[key].errors) {
          const inputElement = document.getElementById(key);
          if (inputElement) {
            gsap.fromTo(inputElement, 
              { backgroundColor: 'rgba(239, 68, 68, 0.1)' },
              { 
                backgroundColor: 'transparent',
                duration: 1,
                ease: 'power2.out'
              }
            );
          }
        }
      });
      return;
    }

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      console.log('Form submitted:', this.contactForm.value);
      
      this.formSubmitted = true;
      
      this.toastService.showToast('success', 'Message Sent Successfully', 'topRight');

      this.contactForm.reset();
      this.submitted = false;
      Object.keys(this.touchedFields).forEach(key => {
        this.touchedFields[key] = false;
      });
    }, 1500);
  }
}