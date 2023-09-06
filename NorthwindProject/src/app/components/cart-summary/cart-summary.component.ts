import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/Models/cartItem';
import { Product } from 'src/app/Models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[];
  total:number = 0;
  constructor(
    private cartService: CartService,
    private toastrService:ToastrService) {

  }
  ngOnInit(): void {
    this.getCarts();
    this.totalPrice();
  }

  getCarts(): CartItem[] {
    return this.cartItems = this.cartService.list();
  }

  removeToCart(cartItem: CartItem) {
    this.cartService.removeToCartService(cartItem.product);
    this.total -= (cartItem.quantity * cartItem.product.unitPrice);
    this.toastrService.error(cartItem.product.productName,'Silindi.');
  }

  totalPrice(){
    this.getCarts().forEach(t=> {
      this.total +=t.quantity * t.product.unitPrice;
    });
  }

}
