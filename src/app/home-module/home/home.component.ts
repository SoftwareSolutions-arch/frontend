import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  discount: number;
  description: string;
  isWishlist: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isWishlistActive = false;

  products: Product[] = [
    {
      id: 1,
      name: 'OnePlus 11 5G',
      price: 729,
      originalPrice: 799,
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      discount: 10,
      description: '6.7" QHD+ AMOLED, Snapdragon 8 Gen 2, 50MP Camera',
      isWishlist: false
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      price: 899,
      originalPrice: 999,
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      discount: 10,
      description: '6.7" QHD+ AMOLED, Snapdragon 8 Gen 2, 50MP Camera',
      isWishlist: false
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24',
      price: 899,
      originalPrice: 999,
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      discount: 10,
      description: '6.7" QHD+ AMOLED, Snapdragon 8 Gen 2, 50MP Camera',
      isWishlist: false
    },
    {
      id: 4,
      name: 'Samsung Galaxy S25',
      price: 899,
      originalPrice: 999,
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      discount: 10,
      description: '6.7" QHD+ AMOLED, Snapdragon 8 Gen 2, 50MP Camera',
      isWishlist: false
    },
  ];

  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    this.getAPI();
  }

  getAPI() {
    this.homeService.getUser().subscribe({
      next: (response) => {
        console.log('User Data:', response);
      },
    });
  }

  toggleWishlist(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index > -1) {
      this.products[index].isWishlist = !this.products[index].isWishlist;
    }
  }
}
