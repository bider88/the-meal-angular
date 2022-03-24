import { MealModel } from 'src/app/models/meal.model';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DishesService } from '../../services/dishes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.scss']
})
export class ListDishesComponent implements OnInit {

  $dishes: Observable<MealModel[]> = of();

  constructor(
    private dishesService: DishesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getQueryParam();
  }

  getQueryParam(): void {
    this.route.queryParams.subscribe({
      next: ({ingredient}: any) => this.getDishesByIngredients(ingredient)
    });
  }

  getDishesByIngredients(ingredient: string = ''): void {
    this.$dishes = this.dishesService.filterDishesByIngredient(ingredient);
  }


}
