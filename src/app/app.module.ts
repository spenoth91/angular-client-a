import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { FoodListComponent } from './foods/components/food-list/food-list.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
