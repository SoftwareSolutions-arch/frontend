// category.component.ts
import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  brand: string;
  isLatest: boolean;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  Math = Math; 
  brands = ['Apple', 'Dell', 'HP', 'Lenovo', 'Asus', 'Acer'];
  selectedBrands: string[] = [];
  priceRange = 5000;
  minRating = 0;
  showLatest = false;

  products: Product[] = [
    {
      id: 1,
      name: 'MacBook Pro 16" M2',
      price: 2499,
      originalPrice: 2799,
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      rating: 4.8,
      reviews: 235,
      brand: 'Apple',
      isLatest: true
    },
    {
      id: 1,
      name: 'MacBook Pro 16" M2',
      price: 2000,
      originalPrice: 2799,
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      rating: 4.8,
      reviews: 235,
      brand: 'Apple',
      isLatest: true
    },
    {
      id: 2,
      name: 'MacBook Pro 16" M2',
      price: 1500,
      originalPrice: 2799,
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      rating: 4.8,
      reviews: 235,
      brand: 'Apple',
      isLatest: true
    },
    {
      id: 3,
      name: 'MacBook Pro 16" M2',
      price: 1800,
      originalPrice: 2799,
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      rating: 4.8,
      reviews: 235,
      brand: 'Apple',
      isLatest: true
    },
    {
      id: 4,
      name: 'MacBook Pro 16" M2',
      price: 1400,
      originalPrice: 2799,
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      rating: 4.8,
      reviews: 235,
      brand: 'Apple',
      isLatest: true
    },
    {
      id: 5,
      name: 'MacBook Pro 16" M2',
      price: 1200,
      originalPrice: 2799,
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      rating: 4.8,
      reviews: 235,
      brand: 'Apple',
      isLatest: true
    },
  ];

  filteredProducts = this.products;

  toggleBrand(brand: string): void {
    const index = this.selectedBrands.indexOf(brand);
    if (index > -1) {
      this.selectedBrands.splice(index, 1);
    } else {
      this.selectedBrands.push(brand);
    }
    this.applyFilters();
  }

  toggleRating(rating: number): void {
    this.minRating = this.minRating === rating ? 0 : rating;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(product => {
      return (!this.selectedBrands.length || this.selectedBrands.includes(product.brand)) &&
             product.price <= this.priceRange &&
             product.rating >= this.minRating &&
             (!this.showLatest || product.isLatest);
    });
  }

  clearFilters(): void {
    this.selectedBrands = [];
    this.priceRange = 5000;
    this.minRating = 0;
    this.showLatest = false;
    this.applyFilters();
  }
}