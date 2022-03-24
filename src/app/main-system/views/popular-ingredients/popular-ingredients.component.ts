import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IngredientModel } from 'src/app/models/ingredient.model';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-popular-ingredients',
  templateUrl: './popular-ingredients.component.html',
  styleUrls: ['./popular-ingredients.component.scss']
})
export class PopularIngredientsComponent implements OnInit {

  $ingredients: Observable<IngredientModel[]> = of();

  constructor(
    private dishesService: DishesService
  ) { }

  ngOnInit(): void {
    this.getDishesByIngredients();
  }

  getDishesByIngredients(): void {
    this.$ingredients = this.dishesService.getDishesByIngredients();
  }

}
