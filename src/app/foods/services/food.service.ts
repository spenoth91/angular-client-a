import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {APIEndpointURLs} from '../../api-endpoint-urls';
import {Food} from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(APIEndpointURLs.foodUrl);
  }

  public addFood(food: Food): Observable<Food> {
    return this.http.post<Food>(APIEndpointURLs.foodUrl, food);
  }

  public update(food: Food): Observable<Food> {
    return this.http.put<Food>(APIEndpointURLs.foodUrl, food);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(APIEndpointURLs.foodUrl);
  }

  public updateAvailability(id: number, availability: boolean): Observable<void> {
    return this.http.put<void>(APIEndpointURLs.foodUrl, id);
  }
}
