import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MealModel } from 'src/app/models/meal.model';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  $dishes: Observable<MealModel[]> = of();

  constructor(
    private dishesService: DishesService
  ) { }

  ngOnInit(): void {
    this.getDishesByIngredients();
  }

  getDishesByIngredients(): void {
    this.$dishes = this.dishesService.filterDishesByIngredient();
  }

}
