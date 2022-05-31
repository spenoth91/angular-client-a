import {Component, OnDestroy, OnInit} from '@angular/core';
import {FoodService} from '../../services/food.service';
import {Subscription} from 'rxjs';
import {Food} from '../../models/food.model';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],

})
export class FoodListComponent implements OnInit, OnDestroy {
  foods: Food[];
  private subscription: Subscription;
  displayBasic: boolean;


  constructor(private foodService: FoodService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.subscription = this.foodService.getAll().subscribe(data => this.foods = data);
    this.primengConfig.ripple = true;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
}

