import { IngredientModel } from './../../models/ingredient.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { ResponseModel } from './../../models/utils/response.model';
import { MealModel } from './../../models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class DishesService extends HttpService {
  constructor(
    private http: HttpClient
  ) {
    super();
  }
  getMainlyDishToday(): Observable<MealModel> {
    return this.http.get<ResponseModel<MealModel>>(`${this.apiUrl}random.php`).pipe(
      map(({meals}) => meals[0])
    );
  }

  getDishesByIngredients(): Observable<IngredientModel[]> {
    return this.http.get<ResponseModel<IngredientModel>>(`${this.apiUrl}list.php?i=list`).pipe(
      map(({meals}) => meals)
    );
  }

  searchDish(dish: string = ''): Observable<MealModel | null> {
    return this.http.get<ResponseModel<MealModel>>(`${this.apiUrl}search.php?s=${dish}`).pipe(
      map(({meals}) => meals ? meals[0] : null)
    );
  }

  filterDishesByIngredient(ingredient: string = ''): Observable<MealModel[]> {
    return this.http.get<ResponseModel<MealModel>>(`${this.apiUrl}filter.php?i=${ingredient}`).pipe(
      map(({meals}) => meals)
    );
  }
}
