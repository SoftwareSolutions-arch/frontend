import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeRoutes } from './home.routing';
import { HomeService } from './home.service';
import { MenubarComponent } from './menubar/menubar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
    ProductDetailsComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutes,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
