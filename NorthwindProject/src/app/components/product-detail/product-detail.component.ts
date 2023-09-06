import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  dataLoaded = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params['productId']){
        this.productService.getProductService(params['productId']).subscribe((response) => {
          this.product = response.data;
          this.dataLoaded = true;
          console.log(response.data)
        });
      }
    });
  }
}
