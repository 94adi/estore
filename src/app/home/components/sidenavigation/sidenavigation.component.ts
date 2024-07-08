import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category.type';

@Component({
  selector: 'app-sidenavigation',
  standalone: true,
  imports: [],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.scss'
})
export class SidenavigationComponent {
  categories: Category[] = [];

  constructor(categoryService: CategoryService){
    this.categories = categoryService.getAllCategories();
  }

  getCategories(parentCategoryId?: number): Category[]{
    return this.categories.filter(c => c.parent_category_id === parentCategoryId);
  }

  
}
