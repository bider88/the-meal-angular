import { Observable } from 'rxjs';
import { MealModel } from '../models/meal.model';
import { environment } from './../../environments/environment';

export abstract class HttpService {

  protected readonly apiUrl = environment.api;

  protected abstract getMainlyDishToday(): Observable<MealModel>;

}
