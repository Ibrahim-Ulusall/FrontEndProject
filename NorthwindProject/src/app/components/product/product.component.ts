import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product1: any = { productId: 1, productName: 'Laptop', UnitPrice: 50000, UnitStock: 50 }
  product2: any = { productId: 2, productName: 'Keyboard', UnitPrice: 50000, UnitStock: 50 }
  product3: any = { productId: 3, productName: 'Mouse', UnitPrice: 50000, UnitStock: 50 }
  product4: any = { productId: 4, productName: 'Telephone', UnitPrice: 50000, UnitStock: 50 }
  product5: any = { productId: 5, productName: 'Table', UnitPrice: 50000, UnitStock: 50 }
  products = [this.product1, this.product2, this.product3, this.product4,  this.product5];
}
