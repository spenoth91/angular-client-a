import {Component, OnDestroy, OnInit} from '@angular/core';
import {FoodService} from '../../services/food.service';
import {Subscription} from 'rxjs';
import {Food} from '../../models/food.model';
import {PrimeNGConfig} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';

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


  constructor(private foodService: FoodService, private primengConfig: PrimeNGConfig) { }

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

  showAddToCart(food: any) {
    this.food = food;
    this.amount = 1;
    this.displayBasic = true;
  }

  addToCart(){
    console.log('ordered ' + this.amount + ' of ' + this.food.id);
  }
}

