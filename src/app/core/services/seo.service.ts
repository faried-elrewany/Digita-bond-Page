import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SEOService {
  private defaultImage = 'assets/hero/gold-them.webp'; // Always use full URL

  constructor(private meta: Meta, private title: Title) {}

  setSeoData(
    title: string, 
    desc: string, 
    imageUrl: string = this.defaultImage,
    keywords: string = 'digital agency, web development, creative design'
  ) {
    //  Title (Browser tab + Search results)
    this.title.setTitle(`${title} | Digital Bond`); 

    //  Standard Meta Tags
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ name: 'keywords', content: keywords }); 
    // Facebook/OpenGraph
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:url', content: window.location.href }); 
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Digital Bond' });

    //  Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: desc });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
    this.meta.updateTag({ name: 'twitter:site', content: '' }); // no twitter for digital bond 
  }
}