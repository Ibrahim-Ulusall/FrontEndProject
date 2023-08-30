import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[] = [];
  dataLoaded:boolean = false;
  constructor(private categoryService:CategoryService){}
  ngOnInit(): void {
      this.getCategories();
  }

  getCategories() : Category[] {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    })
    return this.categories;
  } 
}
