import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/Models/category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {

  }

  getCategories(): Category[] {
    this.categoryService.getCategoriesService().subscribe((response) => {
      this.categories = response.data;
    });
    return this.categories;
  }
}
