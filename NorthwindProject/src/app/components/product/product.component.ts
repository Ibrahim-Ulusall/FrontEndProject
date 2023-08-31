import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products:Product[] = [];
  dataLoaded:boolean = false;
    constructor(
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=> {
      if(params['categoryId']){
          this.getProductsByCategoryId(params['categoryId']);
      }
      else
        this.getProducts();
    });
      
  }

  getProducts() : Product[] {
    this.productService.getProductsService().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
    return this.products;
  }

  getProductsByCategoryId(categoryId:number) : Product[]{
    this.productService.getProductsByCategoryIdService(categoryId).subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
    return this.products;
  }
}
