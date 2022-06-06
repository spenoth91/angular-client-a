import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public foods: any = [];
  public grandTotal !: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getFoods()
      .subscribe(res => {
        this.foods = res;
        this.grandTotal = this.cartService.getTotalPrice();
      });
  }
  removeItem(food: any){
    this.cartService.removeCartItem(food);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }

  orderFood() {
    this.cartService.orderFood();
  }
}
