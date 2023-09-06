import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { CartItems } from '../Models/cartItems';
import { CartItem } from '../Models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCartService(product: Product) {
    let item = CartItems.find(cart => cart.product.productId === product.productId);
    if (item) {
      item.quantity += 1;
    }
    else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeToCartService(product:Product) {
    let item = CartItems.find(cart => cart.product.productId === product.productId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list(): CartItem[] {
    return CartItems;
  }
}
