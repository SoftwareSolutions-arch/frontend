// product.component.ts
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  description: string;
  features: string[];
  images: string[];
  reviews: Review[];
  rating: number;
}

interface Review {
  author: string;
  date: Date;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  quantity = 1;
  activeSlideIndex = 0;
  isInWishlist = false;
  showCompareBar = false;
  comparedItems = [1, 2];
  zoomStyle = {
    display: 'none',
    backgroundImage: '',
    backgroundPosition: 'center'
  };
  isZoomed = false;
  zoomedImage = '';
  showReviewForm = false;
  
  newReview: Review = {
    author: '',
    comment: '',
    rating: 0,
    date: new Date()
  };
  constructor(private router: Router) {}

  product: Product = {
    name: 'OnePlus 11 5G',
    price: 729,
    originalPrice: 799,
    discount: 10,
    description: 'Flagship smartphone with 6.7" QHD+ AMOLED display, Snapdragon 8 Gen 2 processor, and 50MP triple camera system.',
    features: [
      '120Hz Fluid AMOLED Display',
      '50MP+48MP+32MP Triple Camera',
      '5000mAh Battery with 100W Fast Charging'
    ],
    images: [
      'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png'
    ],
    reviews: [
      {
        author: 'John Doe',
        date: new Date(),
        rating: 4,
        comment: 'Excellent phone with amazing camera quality!'
      }
    ],
    rating: 4
  };

  similarProducts = [
    {
      name: 'Samsung Galaxy S23',
      price: 899,
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png'
    }
  ];

  changeSlide(index: number): void {
    this.activeSlideIndex = index;
  }

  toggleWishlist(): void {
    this.isInWishlist = !this.isInWishlist;
  }

  updateQuantity(change: number): void {
    this.quantity = Math.max(1, this.quantity + change);
  }

  addToCart(): void {
    console.log('Added to cart:', this.quantity);
  }

  clearComparison(): void {
    this.comparedItems = [];
  }

  compareNow(): void {
    console.log('Compare items:', this.comparedItems);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showCompareBar = window.scrollY > 500;
  }

  // Image Zoom Functions
  zoomPreview(event: MouseEvent): void {
    const img = event.target as HTMLImageElement;
    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    this.zoomStyle = {
      display: 'block',
      backgroundImage: `url(${img.src})`,
      backgroundPosition: `-${x * 2}px -${y * 2}px`
    };
  }

  hideZoom(): void {
    this.zoomStyle.display = 'none';
  }

  openZoom(image: string): void {
    this.zoomedImage = image;
    this.isZoomed = true;
  }

  closeZoom(): void {
    this.isZoomed = false;
  }

  submitReview(): void {
    if(this.newReview.rating > 0 && this.newReview.comment) {
      this.product.reviews.unshift({
        ...this.newReview,
        date: new Date()
      });
      this.newReview = { author: '', comment: '', rating: 0, date: new Date() };
      this.showReviewForm = false;
    }
  }

  // Buy Now Function
  buyNow(): void {
    this.addToCart();
    this.router.navigate(['/checkout']);
  }
}