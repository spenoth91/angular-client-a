import {Component, OnDestroy, OnInit} from '@angular/core';
import {FoodService} from '../../services/food.service';
import {Subscription} from 'rxjs';
import {Food} from '../../models/food.model';
import {PrimeNGConfig} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],

})
export class FoodListComponent implements OnInit, OnDestroy {
  foods: Food[];
  food: Food;
  private subscription: Subscription;
  displayBasic: boolean;
  amount: number;


  constructor(private foodService: FoodService, private primengConfig: PrimeNGConfig, private cartService: CartService) { }

  ngOnInit(): void {
    this.subscription = this.foodService.getAll().subscribe(data => this.foods = data);
    this.primengConfig.ripple = true;

   /* const routeParams = this.route.snapshot.paramMap;
    const foodIdFromRoute = Number(routeParams.get('foodId'));
    this.food = this.foods.find(food => food.id === foodIdFromRoute);*/
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addToCart(food: any){
    this.cartService.addToCart(food);
  }
}

