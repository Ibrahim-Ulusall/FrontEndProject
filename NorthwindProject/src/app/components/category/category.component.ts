import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/Models/productResponseModel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
      
  }
}
