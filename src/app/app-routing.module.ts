import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {FoodListComponent} from './foods/components/food-list/food-list.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './account/component/login/login.component';
import {AuthGuard} from './account/component/services/auth.guard';



const routes: Routes = [
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'foods', component: FoodListComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
