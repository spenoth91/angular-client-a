import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Order} from '../models/order.model';
import {OrderItem} from '../models/orderitem.model';
import {Food} from "../../foods/models/food.model";
import {APIEndpointURLs} from "../../api-endpoint-urls";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public foodList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }
  getFoods(){
    return this.foodList.asObservable();
  }
  addToCart(food: any){
    this.cartItemList.push(food);
    this.foodList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice(): number{
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.price;
    });
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id){
        this.cartItemList.splice(index, 1);
      }
    });
    this.foodList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = [];
    this.foodList.next(this.cartItemList);
  }

  orderFood(address: any){
    const order = new Order();
    order.orderAddress = address;
    order.userId = 1;
    order.orderItems = [];
    this.cartItemList.forEach((food) => {
      const orderItem = new OrderItem();
      orderItem.foodId = food.id;
      orderItem.amount = 1;
      order.orderItems.push(orderItem);
    });

    this.http.post<Order>(APIEndpointURLs.orderUrl, order).subscribe(res => {
      console.log(res);
    });
  }
}
