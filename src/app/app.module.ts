import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { FoodListComponent } from './foods/components/food-list/food-list.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputNumberModule} from 'primeng/inputnumber';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/component/login/login.component';
import { CartComponent } from './cart/components/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    FoodListComponent,
    HomeComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    RippleModule,
    DialogModule,
    BrowserAnimationsModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
