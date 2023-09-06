import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,
    private router:Router
    ) {

  }

  ngOnInit(): void {
    this.createProductForm();
  }

  createProductForm() {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }

  addProduct() {
    let productModel = Object.assign({}, this.productForm.value)
    this.productService.addProductService(productModel).subscribe(response => {
      this.toastrService.success(response.message, 'Added');
      this.router.navigate(['/products']).then(() => {
        window.location.reload();
      });
    },
     (responseError) => {
      if(responseError.error.Errors && responseError.error.Errors.length > 0){
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Error");        
        }
      }
      else{
        console.log(responseError);
        this.toastrService.error(responseError.error);
      }
    });
  }
}
