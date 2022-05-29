import {Component, OnDestroy, OnInit} from '@angular/core';
import {FoodService} from '../../services/food.service';
import {Subscription} from 'rxjs';
import {Food} from '../../models/food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit, OnDestroy {
  foods: Food[];
  private subscription: Subscription;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.subscription = this.foodService.getAll().subscribe(data => this.foods = data);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

