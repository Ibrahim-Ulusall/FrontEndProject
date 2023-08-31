import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  categories:Category[] = [];
  dataLoaded:boolean = false;
 
  constructor(private categoryService:CategoryService) {}
  
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): Category[] {
    this.categoryService.getCategoriesService().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });
    return this.categories;
  }

}
