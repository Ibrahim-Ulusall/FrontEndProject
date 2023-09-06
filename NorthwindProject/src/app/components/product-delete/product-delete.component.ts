import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  filterText: string = '';
  products: Product[];
  updateProduct: Product;
  constructor(private productService: ProductService,
    private toastrService: ToastrService) {

  }
  ngOnInit(): void {
    this.list();
  }

  list(): Product[] {
    this.productService.getProductsService().subscribe((repsonse) => {
      this.products = repsonse.data;
    });
    return this.products;
  }

  deleteProduct(product: Product) {
    this.productService.deleteProductService(product).subscribe((response) => {
      console.log(response.message);
      this.toastrService.success(response.message);
    },responseError => {
      console.log(responseError.error);
    });
  }

  active(product: Product) {
    this.updateProduct = product;
  }

  UpdateProduct(product: Product) {
    this.productService.updateProductService(product).subscribe((response) => {
      this.toastrService.success(response.message);
    },responseError=>{
      console.log(responseError.error)
      this.toastrService.error(responseError.message);
    });
  }
}
