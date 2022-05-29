import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {FoodListComponent} from './foods/components/food-list/food-list.component';


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'foods', component: FoodListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
