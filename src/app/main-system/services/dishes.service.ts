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
    return this.http.get<ResponseModel>(`${this.apiUrl}random.php`).pipe(
      map(({meals}) => meals[0])
    );
  }
}
