import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductListItem } from './products.type';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../../../shared/components/ratings/ratings.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RatingsComponent],
  providers: [ProductsService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: ProductListItem[] = [];

  constructor(productsService: ProductsService){
    this.products = productsService.getProductsList();
  }
}
