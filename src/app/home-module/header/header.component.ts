import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showNotifications:boolean=false;
  isLoading = false;
  isMenuOpen = false;
  activeSubmenu: string | null = null;

  categories = [
    {
      name: 'Electronics',
      icon: 'fas fa-laptop',
      subcategories: [
        { name: 'Laptops', link: '/electronics/laptops' },
        { name: 'Smartphones', link: '/electronics/smartphones' },
        { name: 'Accessories', link: '/electronics/accessories' }
      ]
    },
  ];
  
  constructor(public homeService: HomeService,private router: Router,public authService:AuthService) { }

  ngOnInit(): void {
  }

  toggleSubmenu(categoryName: string) {
    this.activeSubmenu = this.activeSubmenu === categoryName ? null : categoryName;
  }

  logout() {
    this.homeService.logoutUser().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          localStorage.removeItem('token');
          this.authService.showSuccessToast('Logout successfully!');
          this.router.navigate(['/api/login']);
        }
        else{
          this.authService.showSuccessToast('Something went wrong');
        }
      },
      error: (error) => {
        this.authService.showSuccessToast(error.error.message);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
