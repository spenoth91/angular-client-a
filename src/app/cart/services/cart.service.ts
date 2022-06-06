import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public foodList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }
  getFoods(){
    return this.foodList.asObservable();
  }

  setProduct(food: any){
    this.cartItemList.push(...food);
    this.foodList.next(food);
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
  orderFood(){

  }
}
